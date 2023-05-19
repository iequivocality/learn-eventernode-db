import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const user = await prisma.user.findUnique({
    where: {
      id: 2,
    },
  })

  const performer = await prisma.performer.findUnique({
    where: {
      id: 2,
    },
  })

  if (!user || !performer) {
    return;
  }

  await prisma.favoritedPerformer.create({
    data: {
      fanId: user?.id,
      performerId: performer?.id
    }
  })

  const fansOfPerformers = await prisma.performer.findUnique({
    where: {
      id: 2
    },
    include: {
      fans: true
    }
  });
  console.log('fansOfPerformers', fansOfPerformers)
};

void main();