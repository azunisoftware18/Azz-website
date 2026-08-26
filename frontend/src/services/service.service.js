import api from "./api";

/* ===========================
   Get All Services
=========================== */

export const getServices = (params) => {
  return api.get("/services", {
    params,
  });
};

/* ===========================
   Get Service By ID
=========================== */

export const getServiceById = (id) => {
  return api.get(`/services/${id}`);
};

/* ===========================
   Create Service
=========================== */

export const createService = (formData) => {
  return api.post("/services", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/* ===========================
   Update Service
=========================== */

export const updateService = (id, formData) => {
  return api.put(`/services/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/* ===========================
   Update Service Status
=========================== */

export const updateServiceStatus = (id, status) => {
  return api.patch(`/services/${id}/status`, {
    isActive: status,
  });
};

/* ===========================
   Delete Service
=========================== */

export const deleteService = (id) => {
  return api.delete(`/services/${id}`);
};