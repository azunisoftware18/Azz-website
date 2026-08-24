import express from "express";

import  verifyAdmin  from "../../middlewares/auth.middleware.js";

import {
  applyJob,
  getApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
} from "./application.controller.js";
import { validateApplyJob } from "../applications/application.validation.js";

const router = express.Router();

/* ===========================
   Public Routes
=========================== */

// Apply for a job
router.post("/:jobId/apply", upload.single("resume"), validateApplyJob,applyJob);

/* ===========================
   Admin Routes
=========================== */

// Get all applications
router.get("/", verifyAdmin, getApplications);

// Get application by ID
router.get("/:id", verifyAdmin, getApplicationById);

// Update application status
router.patch("/:id/status", verifyAdmin, updateApplicationStatus);

// Delete application
router.delete("/:id", verifyAdmin, deleteApplication);

export default router;
