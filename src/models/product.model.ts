import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

const getAll = async () => {
  const [products] = await connection.execute<(Product & RowDataPacket)[]>(
    'SELECT * FROM Trybesmith.products');
  return products as Product[];
};

export default {
  create,
  getAll,
};