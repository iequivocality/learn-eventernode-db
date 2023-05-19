import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const newPerformer = await prisma.performer.create({
    data: {
      name: "内田真礼"
    }
  });
  const performers = await prisma.performer.findMany();
  console.log(performers);
};

void main();