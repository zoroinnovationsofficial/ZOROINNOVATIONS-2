import { User } from '../models/user.model.js';

import crypto from 'crypto';

import {

  emailVerificationMailgenContent,

  forgotPasswordMailgenContent,

  sendEmail,

} from '../utils/mail.js';



const registerUser = async (req, res) => {

  try {

    const { email, username, password, fullname } = req.body;



    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({

        success: false,

        message: 'User with this email already exists',

      });

    }



    const user = await User.create({

      email,

      username,

      password,

      fullname,

    });



    if (!user)

      return res.status(500).json({

        success: false,

        message: 'User not created',

      });



    const { unHashedToken, hashedToken, tokenExpiry } =

      user.generateTemporaryToken();



    user.emailVerificationToken = hashedToken;

    user.emailVerificationExpiry = tokenExpiry;



    await user.save();



    // sending verifivation mail

    const verificationUrl = `${process.env.CLIENT_URL}/verify/${unHashedToken}`;

    const mailgenContent = emailVerificationMailgenContent(

      username,

      verificationUrl,

    );

    const options = {

      email: user.email,

      subject: 'verify your email',

      mailgenContent: mailgenContent,

    };



    await sendEmail(options);



    const createdUser = await User.findOne(user._id).select(

      '-password -emailVerificationToken -emailVerificationExpiry -refreshToken -forgotPasswordToken -forgotPasswordExpiry',

    );



    if (!createdUser)

      return res.status(500).json({

        success: false,

        message: 'User not found',

      });



    res.status(200).json({

      success: true,

      user: createdUser,

      message: 'User registered successfully. Please verify your email.',

    });

  } catch (error) {

    console.error('Error registering user:', error);

    res.status(500).json({

      success: false,

      message: 'Internal Server Error',

    });

  }

};



const verifyEmail = async (req, res) => {

  try {

    const { token } = req.params;



    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');



    const user = await User.findOne({

      emailVerificationToken: hashedToken,

      emailVerificationExpiry: { $gt: Date.now() },

    });



    if (!user)

      return res.status(400).json({

        success: false,

        message: 'Invalid token',

      });



    if (user.emailVerificationExpiry < Date.now()) {

      return res.status(400).json({

        success: false,

        message: 'Token has expired',

      });

    }



    user.isEmailVerified = true;

    user.emailVerificationToken = null;

    user.emailVerificationExpiry = null;



    await user.save({ validateBeforeSave: false });



    res.status(200).json({

      success: true,

      message: 'Email verified successfully',

    });

  } catch (error) {

    console.error('Error verifying email:', error);

    res.status(500).json({

      success: false,

      message: 'Internal Server Error',

    });

  }

};



const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;



    if (!email || !password) {

      return res.status(400).json({

        success: false,

        message: 'Email and password are required',

      });

    }



    const user = await User.findOne({ email }).select('+password');



    if (!user) {

      return res.status(400).json({

        success: false,

        message: 'User does not exist',

      });

    }



    const checkPassword = await user.isPasswordCorrect(password);

    if (!checkPassword) {

      return res.status(400).json({

        success: false,

        message: 'Invalid Credentials',

      });

    }



    const accessToken = user.generateAccessToken();

    const refreshToken = user.generateRefreshToken();



    if (!accessToken || !refreshToken) {

      return res.status(500).json({

        success: false,

        message: 'AccessToken and RefreshToken not created',

      });

    }



    const cookieOptions = {

      httpOnly: true,

      secure: true,

      sameSite: 'strict',

    };



    user.refreshToken = refreshToken;

    await user.save();



    res.cookie('AccessToken', accessToken, cookieOptions);

    res.cookie('RefreshToken', refreshToken, cookieOptions);



    const loggedInUser = await User.findById(user._id).select(

      '-password -refreshToken -emailVerificationExpiry -emailVerificationToken',

    );

    if (!loggedInUser) {

      return res.status(500).json({

        success: false,

        message: 'User not found',

      });

    }



    res.status(200).json({

      user: loggedInUser,

      success: true,

      message: 'User logged in successfully',

    });

  } catch (error) {

    console.error('Error logging in user:', error);

    res.status(500).json({

      success: false,

      message: 'Internal Server Error',

    });

  }

};



const logoutUser = async (req, res) => {

  try {

    const userId = req.userId;



    const user = await User.findById(userId);

    if (!user) {

      return res.status(400).json({

        success: false,

        message: 'User not found',

      });

    }



    const cookieOptions = {

      httpOnly: true,

      secure: true,

      sameSite: 'strict',

    };



    res.clearCookie('AccessToken', cookieOptions);

    res.clearCookie('RefreshToken', cookieOptions);



    user.refreshToken = null;



    await user.save();



    res.status(200).json({

      success: true,

      message: 'User logged out successfully',

    });

  } catch (error) {

    console.error('Error logging out user:', error);

    res.status(500).json({

      success: false,

      message: 'Internal Server Error',

    });

  }

};



const resendEmailVerification = async (req, res) => {

  try {

    const { email } = req.body;



    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({

        success: false,

        message: 'User not found',

      });

    }



    if (user.isEmailVerified) {

      return res.status(400).json({

        success: false,

        message: 'Email is already verified',

      });

    }



    const { unHashedToken, hashedToken, tokenExpiry } =

      user.generateTemporaryToken();



    user.emailVerificationToken = hashedToken;

    user.emailVerificationExpiry = tokenExpiry;



    await user.save();



    const verificationUrl = `${process.env.CLIENT_URL}/verify/${unHashedToken}`;

    const mailgenContent = emailVerificationMailgenContent(

      user.username,

      verificationUrl,

    );

    const options = {

      email: user.email,

      subject: 'verify your email',

      mailgenContent: mailgenContent,

    };



    await sendEmail(options);



    res.status(200).json({

      success: true,

      message: 'Verification email resent successfully',

    });

  } catch (error) {

    console.error('Error resending email verification:', error);

    res.status(500).json({

      success: false,

      message: 'Internal Server Error',

    });

  }

};



const refreshAccessToken = async (req, res) => {

  const userId = req.id;

  if (!userId) {

    return res.status(400).json({

      success: false,

      message: 'You must be login to refresh access token',

    });

  }



  const user = await User.findById(userId);

  if (!user) {

    return res.status(400).json({

      success: false,

      message: 'User Data not found',

    });

  }

  const { RefreshToken } = req.cookies;



  if (RefreshToken !== user.refreshToken) {

    return res.status(400).json({

      success: false,

      message: 'Refresh Token does not match',

    });

  }



  const newRefreshToken = user.generateRefreshToken();

  if (!newRefreshToken) {

    return res.status(500).json({

      success: false,

      message: 'Internal Server Error- New Refresh Token not generated',

    });

  }



  const newAccessToken = user.generateAccessToken();

  if (!newAccessToken) {

    return res.status(500).json({

      success: false,

      message: 'Internal Server Error- New Access Token not generated',

    });

  }



  user.refreshToken = newRefreshToken;

  await user.save();



  const cookieRefreshOptions = {

    httpOnly: true,

    secure: true,

    sameSite: 'strict',

    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days

  };



  const cookieAccessOptions = {

    httpOnly: true,

    secure: true,

    sameSite: 'strict',

    maxAge: 30 * 60 * 1000, // 1 day

  };



  res.cookie('accessToken', newAccessToken, cookieAccessOptions);

  res.cookie('refreshToken', newRefreshToken, cookieRefreshOptions);



  res.status(200).json({

    success: true,

    message: 'Access Token refreshed successfully',

  });

};



const resetForgottenPassword = async (req, res) => {

  const { token } = req.params;

  const { newPassword, confirmPassword } = req.body;



  if (newPassword !== confirmPassword) {

    return res.status(400).json({

      success: false,

      message: 'New password and confirm password do not match',

    });

  }



  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');



  const user = await User.findOne({

    forgotPasswordToken: hashedToken,

    forgotPasswordExpiry: { $gt: Date.now() },

  });

  if (!user) {

    return res.status(400).json({

      success: false,

      message: 'Invalid or expired token',

    });

  }



  user.password = newPassword;



  await user.save();



  res.status(200).json({

    success: true,

    message: 'Password reset successfully',

  });

};



const forgotPasswordRequest = async (req, res) => {

  const { email } = req.body;



  const user = await User.findOne({ email });

  if (!user) {

    return res.status(400).json({

      success: false,

      message: 'User not found',

    });

  }



  const { unHashedToken, hashedToken, tokenExpiry } =

    user.generateTemporaryToken();



  user.forgotPasswordToken = hashedToken;

  user.forgotPasswordExpiry = tokenExpiry;



  await user.save();



  const passwordResetUrl = `${process.env.CLIENT_URL}/reset-password/${unHashedToken}`;

  const mailgenContent = forgotPasswordMailgenContent(

    user.username,

    passwordResetUrl,

  );



  const options = {

    email: user.email,

    subject: 'Forgot Password Request',

    mailgenContent: mailgenContent,

  };



  await sendEmail(options);



  res.status(200).json({

    success: true,

    message: 'Forgot Password Request Sent Successfully',

  });

};



const changeCurrentPassword = async (req, res) => {

  const userId = req.userId;

  if (!userId) {

    return res.status(400).json({

      success: false,

      message: 'You must be logged in to change password',

    });

  }



  const user = await User.findById(userId);

  if (!user) {

    return res.status(400).json({

      success: false,

      message: 'User not found',

    });

  }



  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {

    return res.status(400).json({

      success: false,

      message: 'Old password and new password are required',

    });

  }



  const isMatch = user.isPasswordCorrect(oldPassword, user.password);

  if (!isMatch) {

    return res.status(400).json({

      success: false,

      message: 'Old password is incorrect',

    });

  }



  user.password = newPassword;



  await user.save();



  res.status(200).json({

    success: true,

    message: 'Password Changed Successfully',

  });

};



const getCurrentUser = async (req, res) => {

  const userId = req.userId;



  if (!userId) {

    return res.status(400).json({

      success: false,

      message: 'You must be logged in to get user data',

    });

  }



  const user = await User.findById(userId).select('-password -refreshToken');



  if (!user) {

    return res.status(404).json({

      success: false,

      message: 'User not found',

    });

  }



  res.status(200).json({

    success: true,

    data: user,

    message: 'User Found Successfully',

  });

};



export {

  changeCurrentPassword,

  forgotPasswordRequest,

  getCurrentUser,

  loginUser,

  logoutUser,

  refreshAccessToken,

  registerUser,

  resendEmailVerification,

  resetForgottenPassword,

  verifyEmail,

};

