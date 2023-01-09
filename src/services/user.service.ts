import userModel from '../models/user.model';
import User from '../interface/user.interface';

const create = async (user: User) => {
  const createdUser = await userModel.create(user);
  return createdUser;
};

export default {
  create,
};