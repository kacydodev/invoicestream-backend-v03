// import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import mockData from './mockData';

const prisma = new PrismaClient();

async function main() {
  // Clean existing data
  await prisma.client.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.item.deleteMany();

  // Check if we already have users
  const clientCount = await prisma.client.count();

  // Only seed if the database is empty
  if (clientCount === 0) {
    console.log('Fresh database detected! Adding initial data…');

    for (let i = 0; i < mockData.length; i++) {
      await prisma.client.create({
        data: mockData[i],
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
