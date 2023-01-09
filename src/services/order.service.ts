import orderModel from '../models/order.model';

const getAll = async () => {
  const allRequests = await orderModel.getAll();
  return allRequests;
};

export default {
  getAll,
};