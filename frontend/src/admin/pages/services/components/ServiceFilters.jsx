import React from "react";

export default function ServiceFilters({
  filters,
  onFilterChange,
  onReset,
}) {
  const handleSearchChange = (event) => {
    onFilterChange({
      search: event.target.value,
    });
  };

  const handleActiveChange = (event) => {
    const value = event.target.value;

    onFilterChange({
      isActive:
        value === ""
          ? undefined
          : value === "true",
    });
  };

  const handleFeaturedChange = (event) => {
    const value = event.target.value;

    onFilterChange({
      isFeatured:
        value === ""
          ? undefined
          : value === "true",
    });
  };

  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Search
          </label>

          <input
            type="text"
            value={filters?.search || ""}
            onChange={handleSearchChange}
            placeholder="Search services..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Active Status */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Status
          </label>

          <select
            value={
              filters?.isActive === undefined
                ? ""
                : String(filters.isActive)
            }
            onChange={handleActiveChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        {/* Featured */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Featured
          </label>

          <select
            value={
              filters?.isFeatured === undefined
                ? ""
                : String(filters.isFeatured)
            }
            onChange={handleFeaturedChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
          >
            <option value="">All</option>
            <option value="true">Featured</option>
            <option value="false">Not Featured</option>
          </select>
        </div>

        {/* Reset */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={onReset}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}