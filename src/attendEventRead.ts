import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const event = await prisma.event.findUnique({
    where: {
      id: 1,
    },
  })

  if (!event) {
    return;
  }

  const eventerAttendees = await prisma.eventerAttendance.findMany({
    where: {
      attendedEventId: event.id,
    },
    select: {
      eventer: true
    }
  });
  console.log(eventerAttendees.map(e => e.eventer));
};

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
});