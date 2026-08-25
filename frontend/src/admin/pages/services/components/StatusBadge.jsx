import React from "react";

const STATUS_CONFIG = {
  ACTIVE: {
    label: "Active",
    className:
      "bg-green-100 text-green-700 border border-green-200",
  },

  INACTIVE: {
    label: "Inactive",
    className:
      "bg-gray-100 text-gray-700 border border-gray-200",
  },

  DRAFT: {
    label: "Draft",
    className:
      "bg-yellow-100 text-yellow-700 border border-yellow-200",
  },

  PUBLISHED: {
    label: "Published",
    className:
      "bg-blue-100 text-blue-700 border border-blue-200",
  },

  ARCHIVED: {
    label: "Archived",
    className:
      "bg-red-100 text-red-700 border border-red-200",
  },
};

export default function StatusBadge({ status }) {
  const normalizedStatus = String(status || "INACTIVE").toUpperCase();

  const config = STATUS_CONFIG[normalizedStatus] || {
    label: status || "Unknown",
    className:
      "bg-gray-100 text-gray-600 border border-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${config.className}`}
    >
      <span
        className={`mr-2 h-1.5 w-1.5 rounded-full ${
          normalizedStatus === "ACTIVE"
            ? "bg-green-500"
            : normalizedStatus === "PUBLISHED"
            ? "bg-blue-500"
            : normalizedStatus === "DRAFT"
            ? "bg-yellow-500"
            : normalizedStatus === "ARCHIVED"
            ? "bg-red-500"
            : "bg-gray-400"
        }`}
      />

      {config.label}
    </span>
  );
}