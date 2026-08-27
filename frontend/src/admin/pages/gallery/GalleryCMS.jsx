import { useEffect, useState } from "react";
import { Plus, Image as ImageIcon } from "lucide-react";

import { getGallery, deleteGallery } from "../../../services/gallery.api.js";

import GalleryList from "./GalleryList";
import GalleryModal from "./GalleryModal";

export default function GalleryCMS() {
const [gallery, setGallery] = useState([]);
const [loading, setLoading] = useState(true);

const [search, setSearch] = useState("");
const [category, setCategory] = useState("");

const [selectedImage, setSelectedImage] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const fetchGallery = async () => {
try {
setLoading(true);

 
  const response = await getGallery({
    search,
    category,
  });

  setGallery(response.data?.data || []);
} catch (error) {
  console.error("Failed to fetch gallery:", error);
  setGallery([]);
} finally {
  setLoading(false);
}
 

};

useEffect(() => {
fetchGallery();
}, [search, category]);

const handleCreate = () => {
setSelectedImage(null);
setIsModalOpen(true);
};

const handleEdit = (image) => {
setSelectedImage(image);
setIsModalOpen(true);
};

const handleDelete = async (id) => {
const confirmed = window.confirm(
"Are you sure you want to delete this image?"
);

 
if (!confirmed) return;

try {
  await deleteGallery(id);

  setGallery((prev) =>
    prev.filter((image) => image.id !== id)
  );
} catch (error) {
  console.error("Failed to delete image:", error);

  alert(
    error.response?.data?.message ||
      "Failed to delete image"
  );
}
 

};

const handleSuccess = () => {
setIsModalOpen(false);
setSelectedImage(null);
fetchGallery();
};

return ( <div className="space-y-6">
{/* Header */} <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"> <div className="flex items-center gap-3"> <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"> <ImageIcon size={22} /> </div>

 
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Gallery CMS
        </h1>

        <p className="text-sm text-slate-500">
          Manage images used across your website
        </p>
      </div>
    </div>

    <button
      onClick={handleCreate}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
    >
      <Plus size={18} />
      Upload Image
    </button>
  </div>

  {/* Filters */}
  <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-2">
    <input
      type="text"
      placeholder="Search by title or image key..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-slate-400"
    />

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-slate-400"
    >
      <option value="">All Categories</option>
      <option value="HOME">Home</option>
      <option value="ABOUT">About</option>
      <option value="SERVICES">Services</option>
      <option value="BLOGS">Blogs</option>
      <option value="JOBS">Jobs</option>
      <option value="CONTACT">Contact</option>
      <option value="OTHER">Other</option>
    </select>
  </div>

  {/* Gallery Images */}
  <GalleryList
    gallery={gallery}
    loading={loading}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

  {/* Upload / Edit Modal */}
  <GalleryModal
    open={isModalOpen}
    image={selectedImage}
    onClose={() => {
      setIsModalOpen(false);
      setSelectedImage(null);
    }}
    onSuccess={handleSuccess}
  />
</div>
 

);
}
