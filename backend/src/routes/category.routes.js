import { Router } from "express";

import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../modules/blogs/category.controller.js";

import  verifyAdmin  from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", verifyAdmin, getCategories);

router.post("/", verifyAdmin, createCategory);

router.put("/:id", verifyAdmin, updateCategory);

router.delete("/:id", verifyAdmin, deleteCategory);

export default router;