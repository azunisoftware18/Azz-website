import { Router } from "express";

import {
  getApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
} from "./application.controller.js";

import verifyAdmin from "../../middleware/auth.middleware.js";
import { validateStatusUpdate } from "./application.validation.js";

const router = Router();

/* ===========================
   Admin Routes
=========================== */

router.get("/", verifyAdmin, getApplications);

router.get("/:id", verifyAdmin, getApplicationById);

router.patch(
  "/:id/status",
  verifyAdmin,
  validateStatusUpdate,
  updateApplicationStatus
);

router.delete(
  "/:id",
  verifyAdmin,
  deleteApplication
);

export default router;