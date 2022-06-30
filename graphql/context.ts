import { PrismaClient } from "@prisma/client";
import prisma from "@libs/server/prisma";

export type Context = {
  prisma: PrismaClient;
};

export async function createContext(res, req): Promise<Context> {
  return {
    prisma,
  };
}
