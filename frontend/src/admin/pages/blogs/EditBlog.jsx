import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import BlogForm from "./components/BlogForm";

import {
  getBlogById,
  updateBlog,
} from "../../../services/blog.service.js";

import { getCategories } from "../../../services/category.service";

export default function EditBlog() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    try {
      const [blogRes, categoryRes] = await Promise.all([
        getBlogById(id),
        getCategories(),
      ]);

      setBlog(blogRes.data.data);

      setCategories(categoryRes.data.data);
    } catch (error) {
      console.error(error);

      toast.error("Unable to load blog");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values) => {
    try {
      setSaving(true);

      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      await updateBlog(id, formData);

      toast.success("Blog Updated Successfully");

      navigate("/admin/blogs");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update blog"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-lg bg-white p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Blog
        </h1>

        <p className="mt-2 text-gray-500">
          Update your existing blog.
        </p>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <BlogForm
          initialValues={blog}
          categories={categories}
          loading={saving}
          onSubmit={handleSubmit}
        />

      </div>

    </div>
  );
}