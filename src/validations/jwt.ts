import { sign } from 'jsonwebtoken';
import User from '../interface/user.interface';

const JWT = process.env.JWT_SECRET as string;

const createToken = (data: User) => {
  const token = sign(data, JWT, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

  return { token };
};

export default createToken;