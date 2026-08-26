import * as galleryService from "./gallery.service.js";
import {
  createGallerySchema,
  updateGallerySchema,
} from "./gallery.validation.js";

export const getGallery = async (req, res) => {
  try {
    const gallery = await galleryService.getAllGallery(req.query);

    res.status(200).json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    console.error("Get Gallery Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery",
    });
  }
};

export const getGalleryById = async (req, res) => {
  try {
    const { id } = req.params;

    const gallery = await galleryService.getGalleryById(id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery image not found",
      });
    }

    res.status(200).json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    console.error("Get Gallery By ID Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery image",
    });
  }
};

export const createGallery = async (req, res) => {
  try {
    const validation = createGallerySchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.error.flatten(),
      });
    }

    const data = validation.data;

    if (req.file) {
      data.fileName = req.file.filename;
      data.filePath = req.file.path;
      data.url = `/uploads/gallery/${req.file.filename}`;
    }

    const existing = await galleryService.getGalleryByKey(data.key);

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Gallery key already exists",
      });
    }

    const gallery = await galleryService.createGallery(data);

    res.status(201).json({
      success: true,
      message: "Gallery image created successfully",
      data: gallery,
    });
  } catch (error) {
    console.error("Create Gallery Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create gallery image",
    });
  }
};

export const updateGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const validation = updateGallerySchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.error.flatten(),
      });
    }

    const data = validation.data;

    if (req.file) {
      data.fileName = req.file.filename;
      data.filePath = req.file.path;
      data.url = `/uploads/gallery/${req.file.filename}`;
    }

    const gallery = await galleryService.updateGallery(id, data);

    res.status(200).json({
      success: true,
      message: "Gallery updated successfully",
      data: gallery,
    });
  } catch (error) {
    console.error("Update Gallery Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update gallery",
    });
  }
};

export const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await galleryService.getGalleryById(id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Gallery image not found",
      });
    }

    await galleryService.deleteGallery(id);

    res.status(200).json({
      success: true,
      message: "Gallery image deleted successfully",
    });
  } catch (error) {
    console.error("Delete Gallery Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete gallery image",
    });
  }
};