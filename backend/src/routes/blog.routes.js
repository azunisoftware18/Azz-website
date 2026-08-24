import express from "express";
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from "../controllers/blog.controller.js"
import  verifyAdmin  from "../middleware/auth.middleware.js"

const router = express.Router()


router.post("/", verifyAdmin, createBlog);

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.put("/:id", verifyAdmin, updateBlog);

router.delete("/:id", verifyAdmin, deleteBlog);


export default router;