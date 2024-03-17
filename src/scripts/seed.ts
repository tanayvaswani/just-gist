import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.user.create({
      data: {
        email: "me@tanayvaswani.com",
        username: "tanay",
        fullname: "Tanay Vaswani",
        posts: {
          create: {
            title: "Test Post",
            description: "This is a test post",
            published: true,
            upvotes: 24,
          },
        },
        profile: {
          create: {
            bio: "This is a test bio",
          },
        },
      },
    });

    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    console.dir(allUsers, { depth: null });
  } catch (error) {
    console.error("Error seeding test data: ", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
