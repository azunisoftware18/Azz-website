import { useCallback, useEffect, useState } from "react";
import {
  getServices,
  createService,
  updateService,
  deleteService,
  updateServiceStatus,
} from "../../../../services/service.service.js";

export default function useServices(initialParams = {}) {
  const [services, setServices] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    page: initialParams.page || 1,
    limit: initialParams.limit || 10,
    search: initialParams.search || "",
    isActive: initialParams.isActive,
    isFeatured: initialParams.isFeatured,
  });

  // ===========================
  // Fetch Services
  // ===========================

  const fetchServices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getServices(filters);

      setServices(response?.services || []);

      setPagination(
        response?.pagination || {
          total: 0,
          page: filters.page,
          limit: filters.limit,
          totalPages: 0,
        }
      );
    } catch (err) {
      console.error("Failed to fetch services:", err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch services"
      );
    } finally {
      setLoading(false);
    }
  }, [filters]);

  // ===========================
  // Initial / Filter Fetch
  // ===========================

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  // ===========================
  // Create Service
  // ===========================

  const addService = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const response = await createService(data);

      await fetchServices();

      return response;
    } catch (err) {
      console.error("Failed to create service:", err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to create service"
      );

      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // Update Service
  // ===========================

  const editService = async (id, data) => {
    try {
      setLoading(true);
      setError(null);

      const response = await updateService(id, data);

      await fetchServices();

      return response;
    } catch (err) {
      console.error("Failed to update service:", err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to update service"
      );

      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // Delete Service
  // ===========================

  const removeService = async (id) => {
    try {
      setLoading(true);
      setError(null);

      const response = await deleteService(id);

      await fetchServices();

      return response;
    } catch (err) {
      console.error("Failed to delete service:", err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to delete service"
      );

      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // Update Status
  // ===========================

  const changeServiceStatus = async (id, status) => {
    try {
      setLoading(true);
      setError(null);

      const response = await updateServiceStatus(id, status);

      await fetchServices();

      return response;
    } catch (err) {
      console.error("Failed to update service status:", err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to update service status"
      );

      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // Filters
  // ===========================

  const updateFilters = (newFilters) => {
    setFilters((previous) => ({
      ...previous,
      ...newFilters,
      page: 1,
    }));
  };

  // ===========================
  // Pagination
  // ===========================

  const changePage = (page) => {
    setFilters((previous) => ({
      ...previous,
      page,
    }));
  };

  return {
    services,
    pagination,
    filters,

    loading,
    error,

    fetchServices,

    addService,
    editService,
    removeService,
    changeServiceStatus,

    updateFilters,
    changePage,
  };
}