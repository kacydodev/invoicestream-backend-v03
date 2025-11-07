import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma/client';
import type { Status } from '../generated/prisma/client';

type RequestParams = object;
type ResponseBody = object;
type RequestBody = object;
interface RequestQuery {
  status: Status;
  id: string;
  description: string;
  name: string;
  email: string;
  address: string;
}

export const prisma = new PrismaClient();

export async function getInvoices(
  req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
  res: Response,
) {
  try {
    const { status, id, description, name, email, address } = req.query;
    const regexURLSpace = /\+|%20/gm;

    const invoices = await prisma.invoice.findMany({
      where: {
        status: {
          equals: status,
        },
        secondaryId: {
          contains: id,
        },
        description: {
          contains:
            description && description.match(regexURLSpace)
              ? description.replace(regexURLSpace, ' ')
              : description,
        },
        client: {
          name: {
            contains:
              name && name.match(regexURLSpace)
                ? name.replace(regexURLSpace, ' ')
                : name,
          },
          email: {
            contains: email,
          },
          address: {
            contains: address,
          },
        },
      },
      orderBy: [
        {
          updatedAt: 'desc',
        },
        {
          createdAt: 'desc',
        },
      ],
      select: {
        secondaryId: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        paymentTerm: true,
        paymentDue: true,
        status: true,
        total: true,
        client: {
          select: {
            name: true,
            email: true,
            address: true,
          },
        },
        items: {
          select: {
            title: true,
            quantity: true,
            price: true,
          },
        },
      },
    });
    res.send(invoices);
  } catch (err) {
    console.error('Error fetching invoices:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    await prisma.$disconnect();
  }
}
