import dotenv from "dotenv";
import prisma from "./db/db.js";
import app from "./app.js";
dotenv.config({ path: "./.env" });

(async function main() {
  try {
    await prisma.$connect();

    console.log("✅ Database connected");

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Startup error:", error);

    process.exit(1);
  }
})();
