import express from "express";
import {
  deleteContact,
  getAllMessages,
  updateMessageStatus,
  viewSingleMessage,
} from "../controllers/admin.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { contactStatusValidationRules } from "../validators/contact.validator.js";

const router = express.Router();

// Get all messages
router.get("/admin/messages", getAllMessages);

// Get a single message
router.get("/admin/messages/:id", viewSingleMessage);

// Update message status
router.put(
  "/admin/messages/:id",
  contactStatusValidationRules,
  validate,
  updateMessageStatus,
);

// Delete contact
router.delete("/admin/messages/:id", deleteContact);

export default router;
