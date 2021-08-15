import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// Utils
import {
  validateLoginData,
  validateRegisterData,
  validateUpdateUserData,
} from '../utils/validators.js';
import generateToken from '../utils/generateToken.js';

// @route   POST /api/users/login
// @desc    Log in user and get token
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const { valid, errors } = validateLoginData(email, password);

  if (!valid) return res.status(400).json(errors);

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(403).json({ general: 'Email o contraseña invalidos' });
  }
});

// @route   POST /api/users/login
// @desc    Register a new user
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const { valid, errors } = validateRegisterData(
    name,
    email,
    password,
    confirmPassword
  );

  if (!valid) return res.status(400).json(errors);

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ email: 'Este email ya ha sido tomado' });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = req.user;

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = req.user;

  const { valid, errors } = validateUpdateUserData(
    req.body.name,
    req.body.password,
    req.body.confirmPassword
  );

  if (!valid) return res.status(400).json(errors);

  if (user) {
    user.name = req.body.name;

    if (req.body.password && req.body.confirmPassword) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { authUser, getUserProfile, registerUser, updateUserProfile };
