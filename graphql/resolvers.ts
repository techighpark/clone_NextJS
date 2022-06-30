import prisma from "@libs/server/prisma";

export const resolvers = {
  Query: {
    links: async (_parent, args, context) => await prisma.link.findMany({}),
  },
};
