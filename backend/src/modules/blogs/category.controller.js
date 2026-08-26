import * as service from "../../modules/blogs/category.service.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await service.getCategories                                                 ();

    res.json({
      success: true,
      data: categories,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const category = await service.createCategory(
      name,
      description
    );

    res.status(201).json({
      success: true,
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await service.updateCategory(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await service.deleteCategory(req.params.id);

    res.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};