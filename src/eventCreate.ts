import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  await prisma.event.create({
    data: {
      title: 'Animelo Summer Live 2023 -AXEL- DAY3',
      dateAndTime: new Date('2023-08-27'),
      timeDetail: '開場 14:00 開演 16:00 終演 20:00<br>※終演時間はあくまでも目安になります',
      relatedLinks: 'https://anisama.tv/2023/liveinfo/',
      description: 'タイトル Animelo Summer Live 2023 -AXEL-（アニメロサマーライブ ニセンニジュウサン アクセル）',
      creatorId: 1,
      venueId: 1
    }
  });
  const events = await prisma.event.findMany();
  console.log(events);
};

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
});