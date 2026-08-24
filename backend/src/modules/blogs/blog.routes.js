import { Router } from "express";
import  verifyAdmin  from "../../middleware/auth.middleware.js";
import upload from "../../utils/multer.js";

import {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
} from "./blog.controller.js";

const router = Router();

router.get("/", verifyAdmin, getBlogs);

router.post("/", verifyAdmin, upload.single("featuredImage"), createBlog);

router.get("/:id", verifyAdmin, getBlogById);

router.post("/", verifyAdmin, createBlog);

router.put("/:id", verifyAdmin, updateBlog);

router.delete("/:id", verifyAdmin, deleteBlog);

export default router;