import { Request, Response } from 'express';
import productService from '../services/productService';

const CREATED = 201;

const create = async (request: Request, response: Response) => {
  const product = request.body;

  const productCreated = await productService.create(product);
  response.status(CREATED).json(productCreated);
};

const getAll = async (_request: Request, response: Response) => {
  const product = await productService.getAll();
  response.status(200).json(product);
};

export default {
  create,
  getAll,
};