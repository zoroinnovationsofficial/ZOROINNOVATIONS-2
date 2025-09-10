import { User } from '../models/user.model.js';
import crypto from 'crypto';
import {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
} from '../utils/mail.js';

// ... (other functions remain unchanged)

const loginUser = async (req, res) => {
  try {
    // ... (logic for finding and verifying user)

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // ...

    // UPDATED: Changed maxAge to 30 minutes
    const accessTokenCookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 30 * 60 * 1000, // 30 minutes
    };

    const refreshTokenCookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    };

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie('AccessToken', accessToken, accessTokenCookieOptions);
    res.cookie('RefreshToken', refreshToken, refreshTokenCookieOptions);

    // ... (logic for sending response)
    
  } catch (error) {
    // ... (error handling)
  }
};

// ... (other functions remain unchanged)

const refreshAccessToken = async (req, res) => {
    // ... (logic for refreshing tokens)

  const cookieRefreshOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };

  // UPDATED: Changed maxAge to 30 minutes
  const cookieAccessOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 30 * 60 * 1000, // 30 minutes
  };

  res.cookie('accessToken', newAccessToken, cookieAccessOptions);
  res.cookie('refreshToken', newRefreshToken, cookieRefreshOptions);

  res.status(200).json({
    success: true,
    message: 'Access Token refreshed successfully',
  });
};

// ... (rest of the file remains unchanged)

export {
  // ... exports
  loginUser,
  refreshAccessToken,
  // ...
};
