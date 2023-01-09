import { Request, Response } from 'express';
import userService from '../services/user.service';
import createToken from '../validations/jwt';

const CREATED = 201;

const create = async (request: Request, response: Response) => {
  const user = request.body;
  const userCreated = await userService.create(user);
  const token = createToken(userCreated); 

  return response.status(CREATED).json(token);
};

export default {
  create,
};