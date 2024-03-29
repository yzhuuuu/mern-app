import { comparePassword, hashPassword } from '../utils/passwordUtils.js';

import { StatusCodes } from 'http-status-codes';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';
import userSchema from '../models/userModel.js';

export const register = async (req, res) => {
  const isFirstAccount =
    (await userSchema.countDocuments()) === 0 ? true : false;

  req.body.role = isFirstAccount ? 'admin' : 'user';

  const password = await hashPassword(req.body.password);

  req.body.password = password;
  const user = await userSchema.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

export const login = async (req, res) => {
  const user = await userSchema.findOne({ email: req.body.email });

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));

  if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};

export const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};
