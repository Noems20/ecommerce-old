import express from 'express';
import {
  getAllProducts,
  getProduct,
  createProduct,
  resizeProductImage,
  uploadImage,
  updateProduct,
  deleteProduct,
  aliasTopProducts,
  getProductStats,
} from '../controllers/productsController.js';

import { protect, restrictTo } from '../controllers/authController.js';

import reviewRouter from '../routes/reviewRoutes.js';

const router = express.Router();

// router.param('id', productController.checkID)

router.use('/:productId/reviews', reviewRouter);

router.route('/top-10-cheap').get(aliasTopProducts, getAllProducts);
router.route('/product-stats').get(getProductStats);

router
  .route('/')
  .get(getAllProducts)
  .post(
    protect,
    restrictTo('admin'),
    uploadImage,
    createProduct,
    resizeProductImage
  );

router
  .route('/:id')
  .get(getProduct)
  .patch(protect, restrictTo('admin'), updateProduct)
  .delete(protect, restrictTo('admin'), deleteProduct);

export default router;
