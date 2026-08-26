import prisma from "../../db/db.js";

export const getDashboardStats = async () => {
  const [
    totalBlogs,
    publishedBlogs,
    draftBlogs,
    totalJobs,
    activeJobs,
    totalApplications,
    totalCategories,
    recentBlogs,
    recentJobs,
    recentApplications,
  ] = await Promise.all([
    prisma.blog.count(),

    prisma.blog.count({
      where: {
        status: "PUBLISHED",
      },
    }),

    prisma.blog.count({
      where: {
        status: "DRAFT",
      },
    }),

    prisma.job.count(),

    prisma.job.count({
      where: {
        status: "PUBLISHED",
      },
    }),

    prisma.jobApplication.count(),

    prisma.blogCategory.count(),

    prisma.blog.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
      },
    }),

    prisma.job.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.jobApplication.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        job: true,
      },
    }),
  ]);

  return {
    stats: {
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      totalJobs,
      activeJobs,
      totalApplications,
      totalCategories,
    },

    recentBlogs,
    recentJobs,
    recentApplications,
  };
};