// import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient();

const mockData = [
  {
    name: 'Jensen Huang',
    invoices: {
      create: [
        {
          secondaryId: 'RT3080',
          items: {
            create: {
              title: 'Brand Guidelines',
              quantity: 1,
              price: 1800.9,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Alex Grim',
    invoices: {
      create: [
        {
          secondaryId: 'XM9141',
          items: {
            create: [
              {
                title: 'Banner Design',
                quantity: 1,
                price: 156.0,
              },
              {
                title: 'Email Design',
                quantity: 2,
                price: 200.0,
              },
            ],
          },
        },
        {
          items: {
            create: [
              {
                title: 'Web Design',
                quantity: 1,
                price: 6155.91,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'John Morrison',
    invoices: {
      create: [
        {
          secondaryId: 'RG0314',
          items: {
            create: {
              title: 'Website Redesign',
              quantity: 1,
              price: 14002.33,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Alysa Werner',
    invoices: {
      create: [
        {
          secondaryId: 'RT2080',
          items: {
            create: {
              title: 'Logo Sketches',
              quantity: 1,
              price: 102.04,
            },
          },
        },
      ],
    },
  },
  {
    name: 'Mellisa Clarke',
    invoices: {
      create: [
        {
          secondaryId: 'AA1449',
          items: {
            create: [
              {
                title: 'New Logo',
                quantity: 1,
                price: 1532.33,
              },
              {
                title: 'Brand Guidelines',
                quantity: 1,
                price: 2500.0,
              },
            ],
          },
        },
      ],
    },
  },
];

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
        // Include posts and categories on returned output
        include: {
          invoices: {
            include: {
              items: true,
            },
          },
        },
      });
    }

    // await prisma.client.create({
    //   data: {
    //     name: 'Jensen Huang',
    //     invoices: {
    //       create: [
    //         {
    //           secondaryId: 'RT3080',
    //           items: {
    //             create: {
    //               title: 'Brand Guidelines',
    //               quantity: 1,
    //               price: 1800.9,
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
