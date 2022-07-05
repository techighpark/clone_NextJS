import prisma from "@libs/server/prisma";

export const resolvers = {
  Query: {
    ssss: async (_parent, args, context) =>
      await context.prisma.link.findMany(),
  },
};
