import { Router } from "express";

import  verifyAdmin  from "../../middleware/auth.middleware.js";
import upload from "../../utils/multer.js";

import {
  getWebsiteSettings,
  updateWebsiteSettings,
} from "./setting.controller.js";

const router = Router();

/* ===========================
   Website Settings
=========================== */

// Get Website Settings
router.get("/", verifyAdmin, getWebsiteSettings);

// Update Website Settings
router.put(
  "/",
  verifyAdmin,
  upload.fields([
    {
      name: "logo",
      maxCount: 1,
    },
    {
      name: "favicon",
      maxCount: 1,
    },
  ]),
  updateWebsiteSettings
);

export default router;