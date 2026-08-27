import api from "./api";

// ===========================
// Get All Gallery Images
// ===========================
export const getGallery = (params = {}) => {
  return api.get("/gallery", {
    params,
  });
};

// ===========================
// Get Gallery Image By ID
// ===========================
export const getGalleryById = (id) => {
  return api.get(`/gallery/${id}`);
};

// ===========================
// Create Gallery Image
// ===========================
export const createGallery = (formData) => {
  return api.post("/gallery", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// ===========================
// Update / Replace Gallery Image
// ===========================
export const updateGallery = (id, formData) => {
  return api.put(`/gallery/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// ===========================
// Delete Gallery Image
// ===========================
export const deleteGallery = (id) => {
  return api.delete(`/gallery/${id}`);
};