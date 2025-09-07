import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

const authMiddleware = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: 'Access Token not found',
      });
    }

    const decodeToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET,
    );
    if (!decodeToken) {
      return res.status(401).json({
        success: false,
        message: 'Unable to decode token',
      });
    }

    req.userId = decodeToken._id;

    next();
  } catch (error) {
    console.error('Error in authMiddleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

const refreshAccessTokenMiddleware = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    console.log(refreshToken);
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: 'Refresh Token not found',
      });
    }
    const decodeToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );

    if (!decodeToken) {
      return res.status(401).json({
        success: false,
        message: 'Unable to decode token',
      });
    }

    req.id = decodeToken._id;

    next();
  } catch (error) {
    console.error('Error in refreshAccessTokenMiddleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

const checkAdminRole = async (req, res, next) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'User ID not found',
      });
    }

    const user = await User.findById(userId).select('role');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Admins only.',
      });
    }
    next();
  } catch (error) {
    console.error('Error in checkAdminRole middleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export { authMiddleware, refreshAccessTokenMiddleware, checkAdminRole };
