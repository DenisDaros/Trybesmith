import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAll = async (request: Request, response: Response) => {
  const orders = await orderService.getAll();
  response.status(200).json(orders);
};

export default {
  getAll,
};