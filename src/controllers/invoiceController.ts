import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma/client';
import type { Status } from '../generated/prisma/client';

type RequestParams = object;

type ResponseBody = object;

type RequestBody = object;

interface RequestQuery {
  status: Status;
  id: string | number;
  description: string;
}

export const prisma = new PrismaClient();

export async function getInvoices(
  req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
  res: Response,
) {
  try {
    const { status, id, description } = req.query;

    const invoices = await prisma.invoice.findMany({
      where: {
        status: {
          equals: status,
        },
        secondaryId: {
          contains: id.toString(),
        },
        description: {
          contains: description,
        },
      },

      // TODO: Remove on prod
      select: {
        secondaryId: true,
        status: true,
        description: true,
      },

      // TODO: Uncomment on Prod
      // include: {
      //   client: true,
      //   items: true,
      // },
    });
    res.send(invoices);
  } catch (err) {
    console.error('Error fetching invoices:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    await prisma.$disconnect();
  }
}
