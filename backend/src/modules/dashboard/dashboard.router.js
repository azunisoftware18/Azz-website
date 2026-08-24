import { Router } from "express";
import  verifyAdmin  from "../../middleware/auth.middleware.js";
import { getDashboard } from "./dashboard.controller.js";

const router = Router();

router.get("/", verifyAdmin, getDashboard);

export default router;