import productModel from '../models/product.model';
import Product from '../interface/product.interface';

const create = async (product: Product) => {
  const productCreated = await productModel.create(product);
  return productCreated;
};

const getAll = async () => {
  const product = await productModel.getAll();
  return product;
};

export default {
  create,
  getAll,
};