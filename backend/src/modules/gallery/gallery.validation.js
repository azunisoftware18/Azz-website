import { z } from "zod";

export const createGallerySchema = z.object({
  title: z.string().min(1, "Title is required"),
  key: z.string().min(1, "Image key is required"),
  altText: z.string().optional(),
  category: z.string().optional(),
  description: z.string().optional(),
});

export const updateGallerySchema = z.object({
  title: z.string().min(1).optional(),
  key: z.string().min(1).optional(),
  altText: z.string().optional(),
  category: z.string().optional(),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
});
