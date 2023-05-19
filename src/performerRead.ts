import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const performers = await prisma.performer.findMany();
  console.log(performers);
};

void main();