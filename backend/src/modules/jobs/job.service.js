import prisma from "../../db/db.js";

const generateSlug = (title = "") => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const createJob = async (data) => {
  const slug = generateSlug(data.title);

  const existingJob = await prisma.job.findUnique({
    where: { slug },
  });

  if (existingJob) {
    throw new Error("Job with this title already exists");
  }

  const job = await prisma.job.create({
    data: {
      title: data.title,
      slug,
      description: data.description,
      location: data.location,
      experience: data.experience,
      salary: data.salary,
      vacancies: Number(data.vacancies),
      employmentType: data.employmentType,
      categoryId: data.categoryId,
      status: data.status,
      lastDate: new Date(data.lastDate),
    },
    include: {
      category: true,
    },
  });

  return job;
};

export const getJobs = async (query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const where = {};

  if (query.search) {
    where.OR = [
      {
        title: {
          contains: query.search,
        },
      },
      {
        location: {
          contains: query.search,
        },
      },
    ];
  }

  if (query.status) {
    where.status = query.status;
  }

  if (query.categoryId) {
    where.categoryId = query.categoryId;
  }

  const [jobs, total] = await Promise.all([
    prisma.job.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    }),

    prisma.job.count({
      where,
    }),
  ]);

  return {
    jobs,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getJobById = async (id) => {
  const job = await prisma.job.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      applications: true,
    },
  });

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
};

export const updateJob = async (id, data) => {
  const job = await prisma.job.findUnique({
    where: { id },
  });

  if (!job) {
    throw new Error("Job not found");
  }

  const slug = generateSlug(data.title);

  return prisma.job.update({
    where: { id },
    data: {
      title: data.title,
      slug,
      description: data.description,
      location: data.location,
      experience: data.experience,
      salary: data.salary,
      vacancies: Number(data.vacancies),
      employmentType: data.employmentType,
      categoryId: data.categoryId,
      status: data.status,
      lastDate: new Date(data.lastDate),
    },
    include: {
      category: true,
    },
  });
};

export const deleteJob = async (id) => {
  const job = await prisma.job.findUnique({
    where: {
      id,
    },
  });

  if (!job) {
    throw new Error("Job not found");
  }

  return prisma.job.delete({
    where: {
      id,
    },
  });
};

export const getPublicJobs = async (query) => {
  const where = {
    status: "PUBLISHED",
  };

  if (query.search) {
    where.title = {
      contains: query.search,
    };
  }

  if (query.categoryId) {
    where.categoryId = query.categoryId;
  }

  return prisma.job.findMany({
    where,
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getPublicJobBySlug = async (slug) => {
  const job = await prisma.job.findFirst({
    where: {
      slug,
      status: "PUBLISHED",
    },
    include: {
      category: true,
    },
  });

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
};
