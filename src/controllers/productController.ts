import { Request, Response } from 'express';
import productService from '../services/productService';

const CREATED = 201;

const create = async (request: Request, response: Response) => {
  const product = request.body;

  const productCreated = await productService.create(product);
  response.status(CREATED).json(productCreated);
};

export default {
  create,
};