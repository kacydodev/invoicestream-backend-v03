import { Status } from '../src/generated/prisma/client';

const mockData = [
  {
    name: 'Jensen Huang',
    email: 'jensenh@mail.com',
    address: `
      106 Kendell Street
      Sharrington
      NR24 5WQ
      United Kingdom
    `,
    invoices: {
      create: [
        {
          secondaryId: 'RT3080',
          status: Status.paid,
          description: 'Brand Guidelines',
          paymentTerm: 1,
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
    email: 'alexgrim@mail.com',
    address: `
      84 Church Way
      Bradford
      BD1 9PB
      United Kingdom
    `,
    invoices: {
      create: [
        {
          secondaryId: 'XM9141',
          description: 'Graphic Design',
          paymentTerm: 30,
          status: Status.pending,
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
          secondaryId: 'XM9093',
          description: 'Web Design',
          paymentTerm: 30,
          status: Status.paid,
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
    email: 'fdsafdsa',
    address: `
      79 Dover Road
      Westhall
      IP19 3PF
      United Kingdom
    `,
    invoices: {
      create: [
        {
          secondaryId: 'RG0314',
          description: 'Website Redesign',
          paymentTerm: 7,
          status: Status.paid,
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
    email: 'alysa@email.co.uk',
    address: `
      63 Warwick Road
      Carlisle
      CA20 2TG
      United Kingdom
    `,
    invoices: {
      create: [
        {
          secondaryId: 'RT2080',
          description: 'Logo Concept',
          paymentTerm: 1,
          status: Status.paid,
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
    email: 'mellisa.clarke@example.com',
    address: `
    
    `,
    invoices: {
      create: [
        {
          secondaryId: 'AA1449',
          description: 'Re-branding',
          paymentTerm: 7,
          status: Status.pending,
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

export default mockData;
