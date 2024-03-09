import {
  createJob,
  deleteJob,
  editJob,
  getAllJobs,
  getSingleJob,
} from '../controllers/jobController.js';
import {
  validateId,
  validateJobInput,
} from '../middleware/validationMiddleware.js';

import { Router } from 'express';

const router = Router();

router
  .route('/', [])
  .get(getAllJobs)
  .post(validateJobInput, validateId, createJob);
router
  .route('/:id')
  .get(validateId, getSingleJob)
  .patch(validateId, validateJobInput, editJob)
  .delete(validateId, deleteJob);
export default router;
