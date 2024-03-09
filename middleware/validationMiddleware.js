import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
import { body, param, validationResult } from 'express-validator';

import jobModel from '../models/jobsModel.js';
import mongoose from 'mongoose';
import userSchema from '../models/userModel.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        const firstMessage = errorMessages[0];
        console.log(Object.getPrototypeOf(firstMessage));
        if (errorMessages[0].startsWith('no job')) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route');
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};
export const validateJobInput = withValidationErrors([
  body('company').notEmpty().withMessage('Company is required'),
  body('position').notEmpty().withMessage('position is required'),
  body('jobLocation').notEmpty().withMessage('job location is required'),
  body('jobStatus')
    .isIn(Object.values(JOB_STATUS))
    .withMessage('Invalid job status'),

  body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('Invalid job type'),
]);

export const validateId = withValidationErrors([
  param('id').custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) {
      throw new BadRequestError('invalid mongodb id');
    }
    const job = await jobModel.findById(value);
    if (!job) {
      throw new NotFoundError('job not found');
    }
  }),
]);

export const validateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('invalid email')
    .isEmail()
    .withMessage('invalid email')
    .custom(async (email) => {
      const user = await userSchema.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exist');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be 8 characters long'),
  body('lastName').notEmpty().withMessage('last name is required'),
  body('location').notEmpty().withMessage('location is required'),
]);

export const validateUserLogin = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('cannot be empty')
    .isEmail()
    .withMessage('invalid email'),
  body('password').notEmpty().withMessage('cannot be empty'),
]);
