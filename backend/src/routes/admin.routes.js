import express from "express";
import  verifyAdmin  from "../middleware/auth.middleware.js";

import  authorize from "../middleware/role.middleware.js"

const router = express.Router();

router.get("/dashboard", verifyAdmin, (req, res) => {
  res.json({ success: true, message: "Welcome Admin", admin: req.admin });
});

router.post("/users", verifyAdmin, authorize("SUPER_ADMIN"));

export default router;
