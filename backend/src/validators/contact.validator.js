import { body } from 'express-validator';

export const contactValidationRules = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),

  body('email')
    .trim()
    .isEmail().withMessage('Valid email is required'),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 5 }).withMessage('Message must be at least 5 characters long'),

  body('contactNumber')
    .optional()
    .matches(/^[0-9]+$/).withMessage('Contact number must contain only digits')
    .isLength({ min: 7, max: 15 }).withMessage('Contact number must be between 7 and 15 digits'),

  body('city')
    .optional()
    .trim()
    .isString().withMessage('City must be a string'),

  body('subject')
    .optional()
    .trim()
    .isString().withMessage('Subject must be a string')
];

export const contactStatusValidationRules = [
  body('status')
    .notEmpty().withMessage('Status is required')
    .isIn(['new', 'read', 'responded']).withMessage('Invalid status value')
];
