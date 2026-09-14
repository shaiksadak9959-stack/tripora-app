import * as PrismaModule from "@prisma/client";

const PrismaClientCtor =
  (PrismaModule as any)?.PrismaClient ??
  (PrismaModule as any)?.default?.PrismaClient;

if (!PrismaClientCtor) {
  throw new Error(
    "PrismaClient is not available. Run `npx prisma generate` and verify your DATABASE_URL."
  );
}

const globalForPrisma =
  globalThis as typeof globalThis & {
    prisma?: InstanceType<typeof PrismaClientCtor> | undefined;
  };

export const prisma =
  globalForPrisma.prisma ?? new PrismaClientCtor();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}