import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import adminRoutes from "./routes/admin.routes.js"
import blogRoutes from "./routes/blog.routes.js"
import categoryRoutes from "./routes/category.routes.js"
import path from "path";
import applicationRoutes from "./modules/applications/application.router.js";
import jobRoutes from "./modules/jobs/job.routes.js";
import dashboardRoutes from "../src/modules/dashboard/dashboard.router.js";
import contactRoutes from "./modules/contact/contact.router.js";
import settingsRoutes from "./modules/settings/setting.router.js";
import homepageRoutes from "./modules/homepage/homepage.router.js";
import whyChooseRoutes from "./modules/why-choose-us/whyChoose.router.js"
import serviceRoutes from "./modules/services/service.router.js";
import galleryRoutes from "./modules/gallery/gallery.routes.js"

const app = express();

app.use(cors({ origin: true, credentials: true }));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes); 
app.use("/api/blogs", blogRoutes);
app.use("/api/blog-categories", categoryRoutes);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/homepage", homepageRoutes);
app.use("/api/why-choose-us", whyChooseRoutes);
app.use("/api/gallery", galleryRoutes);


app.use("/api/services", serviceRoutes);

export default app;

