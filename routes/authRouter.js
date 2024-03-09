import { login, register } from '../controllers/authController.js';

import { Router } from 'express';
import { validateUserInput } from '../middleware/validationMiddleware.js';

const router = Router();

router.post('/login', login);
router.post('/register', validateUserInput, register);

export default router;
