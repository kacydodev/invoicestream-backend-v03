// import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import mockData from './mockData';

const prisma = new PrismaClient();

async function seed() {
  // Clean existing data
  // await prisma.client.deleteMany();
  // await prisma.invoice.deleteMany();
  // await prisma.item.deleteMany();

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

async function calculateTotal() {
  // get invoices that has items
  const invoicesWithItem = await prisma.invoice.findMany({
    include: {
      items: true,
    },
  });

  // calculate total from items
  for (let i = 0; i < invoicesWithItem.length; i++) {
    // create an array of total for each item
    const itemTotals = invoicesWithItem[i].items.map(({ quantity, price }) => {
      return quantity * price;
    });

    // get sum of item totals
    const sum = itemTotals.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );

    // update invoice total
    await prisma.invoice.update({
      where: {
        id: invoicesWithItem[i].id,
      },
      data: {
        total: sum,
      },
    });
  }
}

async function main() {
  try {
    await seed();
  } catch (err) {
    throw console.error('Seeding failed: ', err);
  } finally {
    await calculateTotal();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
