import productModel from '../models/product.model';
import Product from '../interface/product.interface';

const create = async (product: Product) => {
  const productCreated = await productModel.create(product);
  return productCreated;
};

export default {
  create,
};