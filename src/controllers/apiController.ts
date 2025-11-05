import { PrismaClient } from '../generated/prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export function getStatus(req: Request, res: Response) {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
}

export async function getInvoices(req: Request, res: Response) {
  const invoices = await prisma.invoice.findMany();
  res.send(invoices);
}
