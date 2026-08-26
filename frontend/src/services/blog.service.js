import api from "./api.js";

/* ===========================
   Public APIs
=========================== */

// Get published blogs
export const getPublishedBlogs = (params) => {
  return api.get("/blogs/public", {
    params,
  });
};

// Get blog by slug
export const getBlogBySlug = (slug) => {
  return api.get(`/blogs/public/${slug}`);
};

// Get featured blogs
export const getFeaturedBlogs = () => {
  return api.get("/blogs/public/featured");
};

// Get related blogs
export const getRelatedBlogs = (categoryId) => {
  return api.get("/blogs/public", {
    params: {
      categoryId,
    },
  });
};

// Get blog categories
export const getPublicBlogCategories = () => {
  return api.get("/blog-categories/public");
};


/* ===========================
   Admin APIs
=========================== */

// Get all blogs
export const getBlogs = (params) => {
  return api.get("/blog", {
    params,
  });
};

// Get blog by ID
export const getBlogById = (id) => {
  return api.get(`/blog/${id}`);
};

// Create blog
export const createBlog = (formData) => {
  return api.post("/blog", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update blog
export const updateBlog = (id, formData) => {
  return api.put(`/blog/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete blog
export const deleteBlog = (id) => {
  return api.delete(`/blog/${id}`);
};