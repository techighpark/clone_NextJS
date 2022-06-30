import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  [...Array.from(Array(500).keys())].forEach(async item => {
    await prisma.user.create({
      data: {
        email: String(item),
        role: "ADMIN",
      },
    });
    console.log(`${item}/500`);
    await prisma.link.createMany({
      data: {
        description: String(item),
        title: String(item),
        category: String(item),
        url: String(item),
        imageUrl: String(item),
      },
    });
  });
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
