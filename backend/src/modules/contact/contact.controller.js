import prisma from "../../db/db.js";
import {
  createContactSchema,
  updateReadStatusSchema,
} from "./contact.schema.js";

/* ===========================
   Create Contact (Public)
=========================== */

export const createContact = async (req, res) => {
  try {
    const body = createContactSchema.parse(req.body);

    const contact = await prisma.contact.create({
      data: body,
    });

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   Get All Contacts (Admin)
=========================== */

export const getContacts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      isRead,
    } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    const where = {
      ...(search && {
        OR: [
          {
            name: {
              contains: search,
            },
          },
          {
            email: {
              contains: search,
            },
          },
          {
            phone: {
              contains: search,
            },
          },
        ],
      }),

      ...(isRead !== undefined && {
        isRead: isRead === "true",
      }),
    };

    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.contact.count({
        where,
      }),
    ]);

    return res.json({
      success: true,
      data: contacts,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / Number(limit)),
      },
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
   Get Contact By ID
=========================== */

export const getContactById = async (req, res) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact enquiry not found.",
      });
    }

    return res.json({
      success: true,
      data: contact,
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
   Mark Read / Unread
=========================== */

export const updateReadStatus = async (req, res) => {
  try {
    const body = updateReadStatusSchema.parse(req.body);

    const existingContact = await prisma.contact.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!existingContact) {
      return res.status(404).json({
        success: false,
        message: "Contact enquiry not found.",
      });
    }

    const contact = await prisma.contact.update({
      where: {
        id: req.params.id,
      },
      data: {
        isRead: body.isRead,
      },
    });

    return res.json({
      success: true,
      message: "Status updated successfully.",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ===========================
   Delete Contact
=========================== */

export const deleteContact = async (req, res) => {
  try {
    const existingContact = await prisma.contact.findUnique({
      where: {
        id: req.params.id,
      },
    });

    if (!existingContact) {
      return res.status(404).json({
        success: false,
        message: "Contact enquiry not found.",
      });
    }

    await prisma.contact.delete({
      where: {
        id: req.params.id,
      },
    });

    return res.json({
      success: true,
      message: "Contact enquiry deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};