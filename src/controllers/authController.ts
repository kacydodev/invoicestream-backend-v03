import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

interface User {
  username: string;
  password: string;
}

const users: User[] = [
  {
    username: 'testuser',
    password: '9999',
  },
];

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully' });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
