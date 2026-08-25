import { useState } from "react";

import useServices from "./hooks/useServices";

import ServiceTable from "./components/ServiceTable";
import ServiceFilters from "./components/ServiceFilters";
import ServiceModal from "./components/ServiceModal";

export default function ServiceList() {
  const {
    services,
    pagination,
    filters,
    loading,
    error,

    addService,
    editService,
    removeService,

    updateFilters,
    changePage,
    fetchServices,
  } = useServices();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // ===========================
  // Open Create Modal
  // ===========================

  const handleCreate = () => {
    setSelectedService(null);
    setIsModalOpen(true);
  };

  // ===========================
  // Open Edit Modal
  // ===========================

  const handleEdit = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // ===========================
  // Close Modal
  // ===========================

  const handleCloseModal = () => {
    if (loading) return;

    setIsModalOpen(false);
    setSelectedService(null);
  };

  // ===========================
  // Submit Service
  // ===========================

  const handleSubmit = async (data) => {
    try {
      if (selectedService) {
        await editService(selectedService.id, data);
      } else {
        await addService(data);
      }

      setIsModalOpen(false);
      setSelectedService(null);
    } catch (err) {
      // ServiceModal handles displaying the error.
      console.error("Service submit failed:", err);
    }
  };

  // ===========================
  // Delete Service
  // ===========================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmed) return;

    try {
      await removeService(id);
    } catch (err) {
      console.error("Service delete failed:", err);
    }
  };

  // ===========================
  // Reset Filters
  // ===========================

  const handleResetFilters = () => {
    updateFilters({
      search: "",
      isActive: undefined,
      isFeatured: undefined,
    });
  };

  return (
    <div className="space-y-6">
      {/* ===========================
          Page Header
      =========================== */}

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Services
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage the services displayed on your website.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCreate}
          className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          + Add Service
        </button>
      </div>

      {/* ===========================
          Error
      =========================== */}

      {error && (
        <div className="flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <span>{error}</span>

          <button
            type="button"
            onClick={fetchServices}
            className="font-medium underline hover:no-underline"
          >
            Retry
          </button>
        </div>
      )}

      {/* ===========================
          Filters
      =========================== */}

      <ServiceFilters
        filters={filters}
        onFilterChange={updateFilters}
        onReset={handleResetFilters}
      />

      {/* ===========================
          Summary
      =========================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Total Services
          </p>

          <p className="mt-2 text-2xl font-bold text-gray-900">
            {pagination.total}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Current Page
          </p>

          <p className="mt-2 text-2xl font-bold text-gray-900">
            {pagination.page}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Per Page
          </p>

          <p className="mt-2 text-2xl font-bold text-gray-900">
            {pagination.limit}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">
            Total Pages
          </p>

          <p className="mt-2 text-2xl font-bold text-gray-900">
            {pagination.totalPages}
          </p>
        </div>
      </div>

      {/* ===========================
          Service Table
      =========================== */}

      <ServiceTable
        services={services}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* ===========================
          Pagination
      =========================== */}

      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4">
          <p className="text-sm text-gray-500">
            Page{" "}
            <span className="font-medium text-gray-900">
              {pagination.page}
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-900">
              {pagination.totalPages}
            </span>
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={pagination.page <= 1 || loading}
              onClick={() =>
                changePage(pagination.page - 1)
              }
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <button
              type="button"
              disabled={
                pagination.page >= pagination.totalPages ||
                loading
              }
              onClick={() =>
                changePage(pagination.page + 1)
              }
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* ===========================
          Create / Edit Modal
      =========================== */}

      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        service={selectedService}
        loading={loading}
      />
    </div>
  );
}