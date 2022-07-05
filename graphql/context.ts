// /graphql/context.ts
import { PrismaClient } from "@prisma/client";
import client from "@libs/server/prisma";

export type Context = {
  client: PrismaClient;
};
export async function createContext({
  req,
  res,
}: {
  req: any;
  res: any;
}): Promise<Context> {
  return {
    client,
  };
}
