import { Router } from "express";

import  verifyAdmin  from "../../middleware/auth.middleware.js";

import {
  createContact,
  getContacts,
  getContactById,
  updateReadStatus,
  deleteContact,
} from "./contact.controller.js";

const router = Router();

/* ===========================
   Public Routes
=========================== */

// Submit Contact Enquiry
router.post("/", createContact);

/* ===========================
   Admin Routes
=========================== */

// Get All Contact Enquiries
router.get("/", verifyAdmin, getContacts);

// Get Single Contact Enquiry
router.get("/:id", verifyAdmin, getContactById);

// Mark Read / Unread
router.patch(
  "/:id/read-status",
  verifyAdmin,
  updateReadStatus
);

// Delete Contact Enquiry
router.delete(
  "/:id",
  verifyAdmin,
  deleteContact
);

export default router;