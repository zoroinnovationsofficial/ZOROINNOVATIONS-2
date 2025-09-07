import express from "express";
import { submitMessage } from "../controllers/public.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { contactValidationRules } from "../validators/contact.validator.js";

const router = express.Router();

// Message Submission
router.post("/contacts", contactValidationRules, validate, submitMessage);

export default router;
