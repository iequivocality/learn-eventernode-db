import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const events = await prisma.event.findMany();
  console.log(events);
};

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
});