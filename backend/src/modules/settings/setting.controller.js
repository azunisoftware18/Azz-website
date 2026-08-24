import * as settingsService from "./setting.service.js";

import { updateWebsiteSettingsSchema } from "./setting.schema.js";

/* ===========================
   Get Website Settings
=========================== */

export const getWebsiteSettings = async (req, res) => {
  try {
    const settings = await settingsService.getWebsiteSettings();

    return res.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   Update Website Settings
=========================== */

export const updateWebsiteSettings = async (req, res) => {
  try {
    const body = updateWebsiteSettingsSchema.parse(req.body);

    const data = {
      ...body,
    };

    // Logo Upload
    if (req.files?.logo?.length) {
      data.logo = `/uploads/settings/${req.files.logo[0].filename}`;
    }

    // Favicon Upload
    if (req.files?.favicon?.length) {
      data.favicon = `/uploads/settings/${req.files.favicon[0].filename}`;
    }

    const settings = await settingsService.updateWebsiteSettings(data);

    return res.json({
      success: true,
      message: "Website settings updated successfully.",
      data: settings,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};