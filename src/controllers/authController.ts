import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
import { PrismaClient, User } from '../generated/prisma/client';

const prisma = new PrismaClient();

// async function findUserWithEmail(email: string) {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         email: email,
//       },
//     });
//     return user;
//   } catch (err) {
//     console.error('Error fetching invoices:', err);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

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
          password: password,
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

// export const login = async (req: Request, res: Response) => {};
