import prisma from "../../config/prisma.js";

export const getAllGallery = async (params = {}) => {
  const { search = "", category, isActive } = params;

  const where = {};

  if (search) {
    where.OR = [
      {
        title: {
          contains: search,
        },
      },
      {
        key: {
          contains: search,
        },
      },
    ];
  }

  if (category) {
    where.category = category;
  }

  if (isActive !== undefined) {
    where.isActive = isActive === "true" || isActive === true;
  }

  return prisma.gallery.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getGalleryById = async (id) => {
  return prisma.gallery.findUnique({
    where: { id },
  });
};

export const getGalleryByKey = async (key) => {
  return prisma.gallery.findUnique({
    where: { key },
  });
};

export const createGallery = async (data) => {
  return prisma.gallery.create({
    data,
  });
};

export const updateGallery = async (id, data) => {
  return prisma.gallery.update({
    where: { id },
    data,
  });
};

export const deleteGallery = async (id) => {
  return prisma.gallery.delete({
    where: { id },
  });
};
