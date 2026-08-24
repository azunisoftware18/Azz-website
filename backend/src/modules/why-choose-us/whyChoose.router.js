import { Router } from "express";

import  verifyAdmin  from "../../middleware/auth.middleware.js";
import upload from "../../utils/multer.js";

import {
  createWhyChoose,
  getWhyChooseList,
  getWhyChooseById,
  updateWhyChoose,
  deleteWhyChoose,
} from "./whyChoose.controller.js";

const router = Router();

/* ===========================
   Why Choose Us
=========================== */

// Public Routes
router.get("/", getWhyChooseList);
router.get("/:id", getWhyChooseById);

// Admin Routes
router.post(
  "/",
  verifyAdmin,
  upload.single("icon"),
  createWhyChoose
);

router.put(
  "/:id",
  verifyAdmin,
  upload.single("icon"),
  updateWhyChoose
);

router.delete(
  "/:id",
  verifyAdmin,
  deleteWhyChoose
);

export default router;