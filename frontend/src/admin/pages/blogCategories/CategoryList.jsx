import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import toast from "react-hot-toast";

import DataTable from "../../DataTable/DataTable.jsx";
import ConfirmModal from "../../components/ui/ConfirmModal";
import CategoryModal from "./components/CategoryModal";

import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../../services/category.service";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCategories();
  }, [search]);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const { data } = await getCategories({
        search,
      });

      setCategories(data.data);
    } catch (error) {
      toast.error("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values) => {
    try {
      setSaving(true);

      if (selectedCategory) {
        await updateCategory(selectedCategory.id, values);

        toast.success("Category updated");
      } else {
        await createCategory(values);

        toast.success("Category created");
      }

      setModalOpen(false);
      setSelectedCategory(null);

      fetchCategories();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedCategory) return;

    try {
      setDeleting(true);

      await deleteCategory(selectedCategory.id);

      toast.success("Category deleted");

      setDeleteOpen(false);
      setSelectedCategory(null);

      fetchCategories();
    } catch (error) {
      toast.error("Unable to delete category");
    } finally {
      setDeleting(false);
    }
  };

  const columns = [
    {
      key: "name",
      label: "Category",
    },
    {
      key: "slug",
      label: "Slug",
    },
    {
      key: "blogs",
      label: "Blogs",
      render: (row) => row._count?.blogs || 0,
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Blog Categories
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your blog categories.
          </p>

        </div>

        <button
          onClick={() => {
            setSelectedCategory(null);
            setModalOpen(true);
          }}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          <Plus size={18} />

          Add Category

        </button>

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border p-3"
      />

      {/* Table */}

      <DataTable
        columns={columns}
        data={categories}
        loading={loading}
        renderActions={(row) => (
          <div className="flex gap-2">

            <button
              onClick={() => {
                setSelectedCategory(row);
                setModalOpen(true);
              }}
              className="rounded bg-yellow-500 p-2 text-white"
            >
              <Pencil size={16} />
            </button>

            <button
              onClick={() => {
                setSelectedCategory(row);
                setDeleteOpen(true);
              }}
              className="rounded bg-red-500 p-2 text-white"
            >
              <Trash2 size={16} />
            </button>

          </div>
        )}
      />

      {/* Add/Edit Modal */}

      <CategoryModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedCategory(null);
        }}
        onSubmit={handleSubmit}
        loading={saving}
        initialValues={selectedCategory}
      />

      {/* Delete Modal */}

      <ConfirmModal
        isOpen={deleteOpen}
        title="Delete Category"
        message={`Delete "${selectedCategory?.name}" ?`}
        loading={deleting}
        onCancel={() => {
          setDeleteOpen(false);
          setSelectedCategory(null);
        }}
        onConfirm={handleDelete}
      />

    </div>
  );
}