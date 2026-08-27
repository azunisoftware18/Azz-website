import { useEffect, useState } from "react";
import { X, Upload, Image as ImageIcon } from "lucide-react";

import {
createGallery,
updateGallery,
} from "../../../services/gallery.api.js";

const API_URL = import.meta.env.VITE_API_BASE_URL?.replace("/api", "") || "http://localhost:4000";

const initialForm = {
title: "",
key: "",
altText: "",
category: "HOME",
description: "",
isActive: true,
};

export default function GalleryModal({
open,
image,
onClose,
onSuccess,
}) {
const [form, setForm] = useState(initialForm);
const [selectedFile, setSelectedFile] = useState(null);
const [preview, setPreview] = useState("");
const [loading, setLoading] = useState(false);

const isEditMode = Boolean(image);

useEffect(() => {
if (image) {
setForm({
title: image.title || "",
key: image.key || "",
altText: image.altText || "",
category: image.category || "HOME",
description: image.description || "",
isActive: image.isActive ?? true,
});

 
  if (image.url) {
    const imageUrl =
      image.url.startsWith("http")
        ? image.url
        : `${API_URL}${image.url}`;

    setPreview(imageUrl);
  }
} else {
  setForm(initialForm);
  setPreview("");
}

setSelectedFile(null);
 

}, [image, open]);

if (!open) return null;

const handleChange = (e) => {
const { name, value, type, checked } = e.target;

 
setForm((prev) => ({
  ...prev,
  [name]: type === "checkbox" ? checked : value,
}));
 

};

const handleFileChange = (e) => {
const file = e.target.files?.[0];

 
if (!file) return;

setSelectedFile(file);

const objectUrl = URL.createObjectURL(file);

setPreview(objectUrl);
 

};

const handleSubmit = async (e) => {
e.preventDefault();

 
if (!form.title.trim()) {
  alert("Image title is required");
  return;
}

if (!form.key.trim()) {
  alert("Image key is required");
  return;
}

if (!isEditMode && !selectedFile) {
  alert("Please select an image");
  return;
}

try {
  setLoading(true);

  const formData = new FormData();

  formData.append("title", form.title.trim());
  formData.append("key", form.key.trim());
  formData.append("altText", form.altText.trim());
  formData.append("category", form.category);
  formData.append("description", form.description.trim()
  );

  formData.append(
    "isActive",
    String(form.isActive)
  );

  if (selectedFile) {
    formData.append("image", selectedFile);
  }

  if (isEditMode) {
    await updateGallery(image.id, formData);
  } else {
    await createGallery(formData);
  }

  onSuccess();
} catch (error) {
  console.error("Gallery save error:", error);

  alert(
    error.response?.data?.message ||
      "Failed to save gallery image"
  );
} finally {
  setLoading(false);
}
 

};

return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"> <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
{/* Header */}

 
    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          {isEditMode
            ? "Edit Gallery Image"
            : "Upload Gallery Image"}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {isEditMode
            ? "Update image details or replace the image."
            : "Upload an image for your website."}
        </p>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
      >
        <X size={20} />
      </button>
    </div>

    <form
      onSubmit={handleSubmit}
      className="max-h-[80vh] overflow-y-auto p-6"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {/* Image Upload */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Image {!isEditMode && "*"}
          </label>

          <label className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-slate-400">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="h-[220px] w-full object-cover"
              />
            ) : (
              <>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm">
                  <ImageIcon size={24} />
                </div>

                <span className="text-sm font-medium text-slate-600">
                  Click to select an image
                </span>

                <span className="mt-1 text-xs text-slate-400">
                  PNG, JPG, JPEG, WEBP
                </span>
              </>
            )}

            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {isEditMode && (
            <p className="mt-2 text-xs text-slate-400">
              Select a new image only if you want to replace
              the existing image.
            </p>
          )}
        </div>

        {/* Title */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Image Title *
          </label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Home Hero Image"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-slate-400"
          />
        </div>

        {/* Key */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Image Key *  
          </label>

          <input
            type="text"
            name="key"
            value={form.key}
            onChange={handleChange}
            placeholder="HOME_HERO"
            disabled={isEditMode}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm uppercase outline-none transition focus:border-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100"
          />

          {isEditMode && (
            <p className="mt-1 text-xs text-slate-400">
              Image key cannot be changed after creation.
            </p>
          )}
        </div>

        {/* Category */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-slate-400"
          >
            <option value="HOME">Home</option>
            <option value="ABOUT">About</option>
            <option value="SERVICES">Services</option>
            <option value="BLOGS">Blogs</option>
            <option value="JOBS">Jobs</option>
            <option value="CONTACT">Contact</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        {/* Alt Text */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Alt Text
          </label>

          <input
            type="text"
            name="altText"
            value={form.altText}
            onChange={handleChange}
            placeholder="Describe the image"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-slate-400"
          />
        </div>

        {/* Description */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Description
          </label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            placeholder="Optional description..."
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
          />
        </div>

        {/* Status */}

        <div className="md:col-span-2 flex items-center justify-between rounded-xl border border-slate-200 p-4">
          <div>
            <p className="text-sm font-medium text-slate-800">
              Active Image
            </p>

            <p className="text-xs text-slate-500">
              Enable this image for use on the website.
            </p>
          </div>

          <input
            type="checkbox"
            name="isActive"
            checked={form.isActive}
            onChange={handleChange}
            className="h-5 w-5 cursor-pointer"
          />
        </div>
      </div>

      {/* Footer */}

      <div className="mt-6 flex justify-end gap-3 border-t border-slate-200 pt-5">
        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Upload size={17} />

          {loading
            ? "Saving..."
            : isEditMode
            ? "Update Image"
            : "Upload Image"}
        </button>
      </div>
    </form>
  </div>
</div>
 

);
}
