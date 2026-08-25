import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout.jsx";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import About from "../pages/About.jsx";
import Blog from "../pages/Blog.jsx";
import Contactus from "../pages/Contact.jsx";
import Pricing from "../pages/Pricing.jsx";
import Career from "../pages/Career.jsx";
import WWD from "../pages/WWD.jsx";

import ProtectedRoute from "../admin/routes/ProtectedRoute.jsx";
import AdminLayout from "../admin/layouts/AdminLayout.jsx";
import Login from "../admin/pages/auth/Login.jsx";
import Dashboard from "../admin/pages/dashboard/Dashboard.jsx";

import CategoryList from "../admin/pages/blogCategories/CategoryList.jsx";
import EditBlog from "../admin/pages/blogs/EditBlog.jsx";

import BlogList from "../pages/Blog/BlogList.jsx";
import BlogDetails from "../pages/Blog/BlogDetails.jsx";

import AddJob from "../admin/pages/jobs/AddJob.jsx";
import EditJob from "../admin/pages/jobs/EditJob.jsx";
import JobList from "../admin/pages/jobs/JobList.jsx";

import ApplicationList from "../admin/pages/applications/ApplicationList.jsx";
import ApplicationDetails from "../admin/pages/applications/ApplicationDetails.jsx";
import Sms from "../components/school/Sms.jsx";
import AboutCMS from "../admin/pages/website/AboutCMS.jsx";
import HomeCMS from "../admin/pages/website/HomeCMS.jsx";
import ServicesCMS from "../admin/pages/website/ServicesCMS.jsx";

export const createRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* ==============================
            Public Routes
        ============================== */}

        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />

          <Route path="services" element={<Services />} />

          <Route path="about" element={<About />} />

          <Route path="blog" element={<Blog />} />

          <Route path="blog/list" element={<BlogList />} />

          <Route path="blog/:slug" element={<BlogDetails />} />

          <Route path="contact" element={<Contactus />} />

          <Route path="pricingcontact" element={<Contactus />} />

          <Route path="pricing" element={<Pricing />} />

          <Route path="careers" element={<Career />} />

          <Route path="whatwedo" element={<WWD />} />

          <Route path="ERP" element={<Sms />} />
        </Route>

        {/* ==============================
            Admin Login
        ============================== */}

        <Route path="/admin/login" element={<Login />} />

        {/* ==============================
            Protected Admin Routes
        ============================== */}

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            {/* Dashboard */}
            <Route index element={<Dashboard />} />

            <Route path="dashboard" element={<Dashboard />} />

            {/* Blog Categories */}
            <Route path="blog-categories" element={<CategoryList />} />

            {/* Admin Blog Edit */}
            <Route path="blogs/edit/:id" element={<EditBlog />} />

            {/* Jobs */}
            <Route path="jobs" element={<JobList />} />

            <Route path="jobs/create" element={<AddJob />} />

            <Route path="jobs/edit/:id" element={<EditJob />} />

            {/* Applications */}
            <Route path="applications" element={<ApplicationList />} />

            <Route path="applications/:id" element={<ApplicationDetails />} />

            <Route path="/admin/about" element={<AboutCMS />} />

            <Route path="/admin/home" element={<HomeCMS />} />

            <Route path="/admin/services" element={<ServicesCMS />} />
          </Route>
        </Route>
      </>,
    ),
  );
};
