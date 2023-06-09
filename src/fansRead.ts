import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const fansOfPerformers = await prisma.performer.findUnique({
    where: {
      id: 2
    },
    include: {
      fans: {
        include: {
          fan: true
        }
      }
    }
  });
  console.log('fans of performers', fansOfPerformers?.fans.map(f => f.fan));
};

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
});