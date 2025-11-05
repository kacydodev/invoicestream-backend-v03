import { PrismaClient } from '../generated/prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export function getStatus(req: Request, res: Response) {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
}

export async function getInvoices(req: Request, res: Response) {
  try {
    const invoices = await prisma.invoice.findMany({
      include: {
        client: true,
        items: true,
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

export async function getClients(req: Request, res: Response) {
  try {
    const clients = await prisma.client.findMany({
      include: {
        invoices: true,
      },
    });
    res.send(clients);
  } catch (err) {
    console.error('Error fetching clients:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    await prisma.$disconnect();
  }
}
