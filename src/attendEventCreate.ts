import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const eventer = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  })

  const event = await prisma.event.findUnique({
    where: {
      id: 1,
    },
  })

  if (!eventer || !event) {
    return;
  }

  await prisma.eventerAttendance.create({
    data: {
      eventerId: eventer.id,
      attendedEventId: event.id,
      attendanceDetails: ''
    }
  });

  const eventerAttendees = await prisma.eventerAttendance.findMany({
    where: {
      attendedEventId: event.id
    },
    include: {
      eventer: true
    }
  });
  console.log(eventerAttendees);
};

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
});