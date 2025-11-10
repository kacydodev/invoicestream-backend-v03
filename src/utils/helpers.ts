import bcrypt from 'bcrypt';
import { User } from '../generated/prisma/client';

const saltRounds = 10;

export const hashPassword = (password: User['password']) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const isMatchedPassword = (
  plain: User['password'],
  hashed: User['password'],
) => bcrypt.compareSync(plain, hashed);
