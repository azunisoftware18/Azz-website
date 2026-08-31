// import dotenv from "dotenv";
// import prisma from "./db/db.js";
// import app from "./app.js";
// dotenv.config({ path: "./.env" });

// (async function main() {
//   try {
//     await prisma.$connect();

//     console.log("✅ Database connected");

//     const PORT = process.env.PORT || 4000;

//     app.listen(PORT, "0.0.0.0", () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("❌ Startup error:", error);

//     process.exit(1);
//   }
// })();

import "dotenv/config";
import prisma from "./db/db.js";
import app from "./app.js";

let dbConnected = false;

async function connectDatabase() {
  if (!dbConnected) {
    await prisma.$connect();
    dbConnected = true;
    console.log("✅ Database connected");
  }
}

export default async function handler(req, res) {
  try {
    await connectDatabase();

    return app(req, res);
  } catch (error) {
    console.error("❌ Database connection error:", error);

    return res.status(500).json({
      success: false,
      message: "Database connection failed",
      error: process.env.NODE_ENV === "production" ? undefined : error.message,
    });
  }
}
