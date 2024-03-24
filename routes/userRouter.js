import {
  getApplicationStatus,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";

import { Router } from "express";
import { authorizePermissions } from "../middleware/authMiddleware.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.get(
  "/admin/app-stats",
  authorizePermissions("admin"),
  getApplicationStatus,
);
router.patch("/update-user", validateUpdateUserInput, updateUser);

router.get("/current-user", getCurrentUser);

export default router;
