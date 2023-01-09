import { ResultSetHeader } from 'mysql2/promise';
import Product from '../interface/product.interface';
import connection from './connection';

const create = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId } = result;
  return { id: insertId, ...product };
};

export default {
  create,
};