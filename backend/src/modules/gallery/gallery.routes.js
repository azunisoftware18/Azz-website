import express from "express";

import {
  getGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery,
} from "./gallery.controller.js";

import upload from "../../middleware/upload.middleware.js";

const router = express.Router();

router.get("/", getGallery);

router.get("/:id", getGalleryById);

router.post(
  "/",
  upload.single("image"),
  createGallery
);

router.put(
  "/:id",
  upload.single("image"),
  updateGallery
);

router.delete("/:id", deleteGallery);

export default router;