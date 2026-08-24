import * as jobService from "./job.service.js";
import { createJobSchema, updateJobSchema } from "./job.validation.js";

// ==============================
// Create Job
// ==============================

export const createJob = async (req, res) => {
  try {
    const validatedData = createJobSchema.parse(req.body);

    const job = await jobService.createJob(validatedData);

    return res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get All Jobs (Admin)
// ==============================

export const getJobs = async (req, res) => {
  try {
    const jobs = await jobService.getJobs(req.query);

    return res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get Single Job
// ==============================

export const getJobById = async (req, res) => {
  try {
    const job = await jobService.getJobById(req.params.id);

    return res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.error(error);

    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Update Job
// ==============================

export const updateJob = async (req, res) => {
  try {
    const validatedData = updateJobSchema
      ? updateJobSchema.parse(req.body)
      : req.body;

    const job = await jobService.updateJob(req.params.id, validatedData);

    return res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Delete Job
// ==============================

export const deleteJob = async (req, res) => {
  try {
    await jobService.deleteJob(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Public Jobs
// ==============================

export const getPublicJobs = async (req, res) => {
  try {
    const jobs = await jobService.getPublicJobs(req.query);

    return res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Public Job Details
// ==============================

export const getPublicJobBySlug = async (req, res) => {
  try {
    const job = await jobService.getPublicJobBySlug(req.params.slug);

    return res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.error(error);

    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
