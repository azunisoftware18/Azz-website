import StatusBadge from "./StatusBadge";

export default function ServiceTable({ services, loading, onEdit, onDelete }) {
  if (loading) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        Loading services...
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        No services found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="border-b bg-gray-100">
          <tr>
            <th className="px-5 py-4 text-left text-sm font-semibold">Image</th>

            <th className="px-5 py-4 text-left text-sm font-semibold">
              Service
            </th>

            <th className="px-5 py-4 text-left text-sm font-semibold">
              Description
            </th>

            <th className="px-5 py-4 text-center text-sm font-semibold">
              Order
            </th>

            <th className="px-5 py-4 text-center text-sm font-semibold">
              Featured
            </th>

            <th className="px-5 py-4 text-center text-sm font-semibold">
              Status
            </th>

            <th className="px-5 py-4 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr
              key={service.id}
              className="border-b transition hover:bg-gray-50"
            >
              {/* Image */}

              <td className="px-5 py-4">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-14 w-14 rounded-lg border object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
                    No Image
                  </div>
                )}
              </td>

              {/* Title */}

              <td className="px-5 py-4">
                <div className="font-medium text-gray-900">{service.title}</div>

                <div className="mt-1 text-sm text-gray-500">{service.slug}</div>
              </td>

              {/* Short Description */}

              <td className="max-w-xs px-5 py-4">
                <p className="line-clamp-2 text-sm text-gray-600">
                  {service.shortDescription}
                </p>
              </td>

              {/* Order */}

              <td className="px-5 py-4 text-center">{service.order}</td>

              {/* Featured */}

              <td className="px-5 py-4 text-center">
                {service.isFeatured ? (
                  <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                    Featured
                  </span>
                ) : (
                  <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                    Normal
                  </span>
                )}
              </td>

              {/* Status */}

              <td className="px-5 py-4 text-center">
                {/* <StatusBadge status={service.status} /> */}
                <StatusBadge
                  status={service.isActive ? "ACTIVE" : "INACTIVE"}
                />
              </td>

              {/* Actions */}

              <td className="px-5 py-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(service)}
                    className="rounded-lg bg-yellow-500 px-3 py-2 text-sm text-white transition hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(service.id)}
                    className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
