import { Router } from "express";

import  verifyAdmin  from "../../middleware/auth.middleware.js";
import upload from "../../utils/multer.js";

import { getHomepage, updateHomepage } from "./homepage.controller.js";

const router = Router();

/* ===========================
   Homepage CMS
=========================== */

// Get Homepage Content
router.get("/", verifyAdmin, getHomepage);

// Update Homepage Content
router.put(
  "/",
  verifyAdmin,
  upload.fields([
    {
      name: "heroBackgroundImage",
      maxCount: 1,
    },
    {
      name: "aboutImage",
      maxCount: 1,
    },
  ]),
  updateHomepage,
);

export default router;
