import { Request, Response } from 'express';
import { PrismaClient, User } from '../generated/prisma/client';
import { isMatchedPassword, hashPassword } from '../utils/helpers';

const prisma = new PrismaClient();

export async function signup(req: Request, res: Response) {
  const { email, password, name }: User = req.body;
  const regexURLSpace = /\+|%20/gm;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return res.send(`user already exist`);
    } else {
      const newUser = await prisma.user.create({
        data: {
          email: email,
          password: hashPassword(password),
          name: name.match(regexURLSpace)
            ? name.replace(regexURLSpace, ' ')
            : name,
        },
      });
      return res.send(newUser);
    }
  } catch (err) {
    console.error('Error creating user:', err);
  } finally {
    await prisma.$disconnect();
  }
}

export async function login(req: Request, res: Response) {
  const { email, password }: User = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user && isMatchedPassword(password, user.password)) {
      return res.redirect(`/user/:${user.id}`);
      // return res.send('Password matched');
    } else
      return res.status(401).json({ message: 'Error incorrect password.' });
  } catch (err) {
    console.error('Error creating user:', err);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getDashboard(req: Request, res: Response) {
  const { id } = req.params;
  console.log('id:', id);
  return res.json({ id: id });
}
