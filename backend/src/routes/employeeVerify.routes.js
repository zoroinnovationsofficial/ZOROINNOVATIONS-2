import Router from 'express';

import {
  createEmployeeValidator,
  employeeIdVerifyValidator,
} from '../validators/employeeVerify.validators.js';
import {
  changeEmployeeStatus,
  createEmployee,
  deleteEmployee,
  editEmployeeData,
  employeeVerificationController,
  getAllEmployees,
  getEmployeeById,
} from '../controllers/employeeVerification.controller.js';
import {
  authMiddleware,
  checkAdminRole,
} from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validator.middleware.js';

const router = Router();

router
  .route('/verify-employee-id')
  .post(
    employeeIdVerifyValidator(),
    validate,
    checkAdminRole,
    employeeVerificationController,
  );

router
  .route('/create-employee')
  .post(
    createEmployeeValidator(),
    validate,
    authMiddleware,
    checkAdminRole,
    createEmployee,
  );

router
  .route('/edit-employee/:employeeId')
  .put(
    employeeIdVerifyValidator(),
    validate,
    authMiddleware,
    checkAdminRole,
    editEmployeeData,
  );

router
  .route('/get-employee/:employeeId')
  .get(
    employeeIdVerifyValidator(),
    validate,
    authMiddleware,
    checkAdminRole,
    getEmployeeById,
  );

router.route('/getemployees').get(getAllEmployees);
router
  .route('/delete-employee/:employeeId')
  .delete(
    employeeIdVerifyValidator(),
    validate,
    authMiddleware,
    checkAdminRole,
    deleteEmployee,
  );

router
  .route('/change-employee-status/:employeeId')
  .put(
    employeeIdVerifyValidator(),
    validate,
    authMiddleware,
    checkAdminRole,
    changeEmployeeStatus,
  );
export default router;

