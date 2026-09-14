import { NextResponse } from "next/server";
import { } from "@prisma/client";
import { PrismaClient } from "@prisma/client/scripts/default-index.js";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      email?: unknown;
      points?: unknown;
    };

    const email =
      typeof body.email === "string"
        ? body.email.trim()
        : "";
    const points = Number(body.points);

    if (
      !email ||
      !Number.isInteger(points) ||
      points <= 0
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid reward request"
        },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return NextResponse.json(
        {
          ok: false,
          error: "User not found"
        },
        { status: 404 }
      );
    }

    const updated = await prisma.$transaction(async (tx: { user: { update: (arg0: { where: { id: any; }; data: { points: { increment: number; }; }; }) => any; }; pointLog: { create: (arg0: { data: { userId: any; points: number; reason: string; }; }) => any; }; }) => {
      const result = await tx.user.update({
        where: { id: user.id },
        data: {
          points: {
            increment: points
          }
        }
      });

      await tx.pointLog.create({
        data: {
          userId: user.id,
          points,
          reason: "Booking reward"
        }
      });

      return result;
    });

    return NextResponse.json({
      ok: true,
      points: updated.points
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        error: "Unable to update rewards"
      },
      { status: 500 }
    );
  }
}