import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const newUser = await prisma.user.create({
    data: {
      name: 'bluemist',
      email: 'bluemist@test.xyz'
    }
  });
  const users = await prisma.user.findMany();
  console.log(users);
};

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
});