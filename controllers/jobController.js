import { NotFoundError } from '../errors/customErrors.js';
import { StatusCodes } from 'http-status-codes';
import jobModel from '../models/jobsModel.js';

export const getAllJobs = async (req, res) => {
  console.log(req.user);
  const jobs = await jobModel.find({ createdBy: req.user.userId });

  res.status(StatusCodes.OK).json({ jobs });
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;

  const job = await jobModel.findById(id);

  res.status(StatusCodes.OK).json({ job });
};

export const editJob = async (req, res) => {
  const { id } = req.params;
  const { company, position } = req.body;
  const updatedJob = await jobModel.findByIdAndUpdate(
    { _id: id },
    { company, position },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ updatedJob });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await jobModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const job = await jobModel.findOneAndDelete({ _id: id });

  res
    .status(StatusCodes.OK)
    .json({ message: `Job with id ${id} deleted`, job });
};
