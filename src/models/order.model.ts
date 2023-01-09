import { RowDataPacket } from 'mysql2';
import Order from '../interface/orders.interface';
import connection from './connection';

const getAll = async (): Promise<Order[]> => {
  const [orders] = await connection.execute<(Order & RowDataPacket)[]>(
    `SELECT
    A.id,
    A.user_id as userId,
    JSON_ARRAYAGG(B.id) as productsIds
  FROM
    Trybesmith.orders AS A
    INNER JOIN Trybesmith.products AS B
      ON A.id = B.order_id
  GROUP BY
    A.id`);

  return orders;
};

export default {
  getAll,
};