import { Router } from "express";

import  verifyAdmin  from "../../middleware/auth.middleware.js";
import upload from "../../utils/multer.js";

import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
} from "./service.controller.js";

const router = Router();

/* ===========================
   Public Routes
=========================== */

// Get all active services
router.get("/", getServices);

// Get service by ID
router.get("/:id", getServiceById);

/* ===========================
   Admin Routes
=========================== */

// Create service
router.post(
  "/",
  verifyAdmin,
  upload.single("image"),
  createService
);

// Update service
router.put(
  "/:id",
  verifyAdmin,
  upload.single("image"),
  updateService
);

// Delete service
router.delete(
  "/:id",
  verifyAdmin,
  deleteService
);

export default router;