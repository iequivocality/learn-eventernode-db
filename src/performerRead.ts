import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const performers = await prisma.performer.findMany();
  console.log(performers);
};

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
});