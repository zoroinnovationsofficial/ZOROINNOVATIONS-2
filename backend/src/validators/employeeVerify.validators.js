import { body } from 'express-validator';

const employeeIdVerifyValidator = () => {
  return [
    body('employeeId')
      .notEmpty()
      .withMessage('Employee ID is required')
      .isString()
      .withMessage('Employee ID must be a string'),
  ];
};

const createEmployeeValidator = () => {
  return [
    body('fullName')
      .optional()
      .isString()
      .withMessage('Full Name must be a string'),
    body('department')
      .optional()
      .isString()
      .withMessage('Department must be a string'),
    body('role')
      .notEmpty()
      .withMessage('Role is required')
      .isString()
      .withMessage('Role must be a string'),
    body('startDate')
      .optional()
      .isDate()
      .withMessage('Start Date must be a valid date'),
    body('status')
      .notEmpty()
      .withMessage('Status is required')
      .isString()
      .withMessage('Status must be a string'),
    body('certificateIssueDate')
      .optional()
      .isDate()
      .withMessage('Certificate Issue Date must be a valid date'),
  ];
};

export { employeeIdVerifyValidator, createEmployeeValidator };
