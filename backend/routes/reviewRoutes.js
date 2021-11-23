import express from 'express';

import {
  getAllReviews,
  createReview,
  deleteReview,
  updateReview,
  setProductUserIds,
  checkIfAuthor,
  getReview,
} from '../controllers/reviewsController.js';

import { protect, restrictTo } from '../controllers/authController.js';

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route('/')
  .get(getAllReviews)
  .post(restrictTo('user', 'admin'), setProductUserIds, createReview);

router
  .route('/:id')
  .get(getReview)
  .patch(restrictTo('user', 'admin'), checkIfAuthor, updateReview)
  .delete(restrictTo('user', 'admin'), checkIfAuthor, deleteReview);

export default router;
