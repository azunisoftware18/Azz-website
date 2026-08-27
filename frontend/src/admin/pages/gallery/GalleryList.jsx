import { Edit, Trash2, ImageIcon } from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_BASE_URL?.replace("/api", "") ||
  "http://localhost:4000";

export default function GalleryList({
  gallery = [],
  loading,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            {" "}
            <div className="aspect-video bg-slate-200" />
            
            <div className="space-y-3 p-4">
              <div className="h-4 w-3/4 rounded bg-slate-200" />
              <div className="h-3 w-1/2 rounded bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!gallery.length) {
    return (
      <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
        {" "}
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
          {" "}
          <ImageIcon size={30} />{" "}
        </div>
        <h3 className="text-lg font-semibold text-slate-800">
          No images found
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Upload an image to start managing your website visuals.
        </p>
      </div>
    );
  }

  const getImageUrl = (image) => {
    if (!image?.url) return "";

    if (image.url.startsWith("http://") || image.url.startsWith("https://")) {
      return image.url;
    }

    return `${API_URL}${image.url}`;
  };

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {gallery.map((image) => (
        <div
          key={image.id}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Image */}

          <div className="relative aspect-video overflow-hidden bg-slate-100">
            {image.url ? (
              <img
                src={getImageUrl(image)}
                alt={image.altText || image.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-400">
                <ImageIcon size={32} />
              </div>
            )}

            {/* Status */}

            <div className="absolute left-3 top-3">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  image.isActive
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-500 text-white"
                }`}
              >
                {image.isActive ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Actions */}

            <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition group-hover:opacity-100">
              <button
                onClick={() => onEdit(image)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-700 shadow transition hover:bg-slate-100"
                title="Edit image"
              >
                <Edit size={16} />
              </button>

              <button
                onClick={() => onDelete(image.id)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-red-500 shadow transition hover:bg-red-50"
                title="Delete image"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Content */}

          <div className="p-4">
            <h3 className="truncate text-sm font-semibold text-slate-900">
              {image.title}
            </h3>

            <p className="mt-1 truncate text-xs font-medium text-blue-600">
              {image.key}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
                {image.category || "Uncategorized"}
              </span>

              <span className="text-xs text-slate-400">
                {image.fileName || "Image"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
