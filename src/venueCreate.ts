import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  await prisma.venue.create({
    data: {
      title: 'さいたまスーパーアリーナ',
      locationTitle: '〒330-9111 埼玉県さいたま市中央区新都心8番地',
      locationLink: 'http://maps.google.com/maps?q=%E5%9F%BC%E7%8E%89%E7%9C%8C%E3%81%95%E3%81%84%E3%81%9F%E3%81%BE%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%96%B0%E9%83%BD%E5%BF%838%E7%95%AA%E5%9C%B0',
      telephoneNumber: '048-600-3001',
      seatingCapacity: '37,000-25,000 (stadium mode) / 22,000-12,000 (main arena mode) / 6,000-4,000 (hall mode) / 3,000 (community arena)',
      seatingInformation: 'https://www.saitama-arena.co.jp/seats_info/',
      description: '<Access>・3 minutes walk from Saitama Shintoshin Station https://www.saitama-arena.co.jp/access/',
      creatorId: 1
    }
  });
  const venues = await prisma.venue.findMany();
  console.log(venues);
};

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
});