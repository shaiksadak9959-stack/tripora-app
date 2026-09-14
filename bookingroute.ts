import { NextResponse } from "next/server";

// Create a Prisma client instance locally to avoid missing module errors
const prisma = new (require("@prisma/client").PrismaClient)();
import { z } from "zod";

const BookingSchema = z.object({
  type: z.enum([
    "FLIGHT",
    "TRAIN",
    "BUS",
    "HOTEL",
    "VISA"
  ]),

  amount: z
    .number()
    .int()
    .positive(),

  details: z
    .record(z.any())
    .default({})
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result =
      BookingSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid booking information"
        },
        { status: 400 }
      );
    }

    /*
      DEMO USER ONLY.

      Production:
      Replace this with the authenticated
      user's ID from your authentication system.
    */

    const user =
      await prisma.user.upsert({
        where: {
          email: "demo@tripora.online"
        },

        update: {},

        create: {
          email: "demo@tripora.online",
          name: "Demo Traveler"
        }
      });

    const reference =
      "TRP-" +
      Date.now()
        .toString(36)
        .toUpperCase();

    const booking =
      await prisma.booking.create({
        data: {
          userId: user.id,
          type: result.data.type,
          amount: result.data.amount,
          currency: "INR",
          status: "PENDING",
          reference,
          details: result.data.details
        }
      });

    return NextResponse.json({
      ok: true,
      bookingId: booking.id,
      reference: booking.reference
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        error:
          "Database unavailable. Check DATABASE_URL."
      },
      { status: 500 }
    );
  }
}