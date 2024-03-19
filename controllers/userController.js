import { StatusCodes } from 'http-status-codes';
import jobModel from '../models/jobsModel.js';
import userSchema from '../models/userModel.js';

export const getCurrentUser = async (req, res) => {
  const user = await userSchema.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStatus = async (req, res) => {
  const users = await userSchema.countDocuments();
  const jobs = await userSchema.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  const updatedUser = await userSchema.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: 'update user' });
};
