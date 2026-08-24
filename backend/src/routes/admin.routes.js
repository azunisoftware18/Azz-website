import express from "express";
import verifyAdmin from "../middleware/auth.middleware.js";

import authorize from "../middleware/role.middleware.js";

const router = express.Router();

// router.get("/dashboard", verifyAdmin, (req, res) => {
//   res.json({ success: true, message: "Welcome Admin", admin: req.admin });
// });

router.get("/dashboard", verifyAdmin, (req, res) => {
  console.log("Dashboard route reached");
  console.log("Authenticated user:", req.user);

  return res.status(200).json({
    success: true,
    message: "Dashboard loaded successfully",
    admin: req.user,
    stats: {
      users: 0,
      loans: 0,
      applications: 0,
    },
  });
});

router.post("/users", verifyAdmin, authorize("SUPER_ADMIN"));

export default router;
