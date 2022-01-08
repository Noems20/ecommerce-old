import User from '../models/userModel.js';
import Product from '../models/productModel.js';

import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
// -------------------------------------------------------------------------------
// GET LOGGER USER CART PRODUCTS
// -------------------------------------------------------------------------------

export const getUserCartProducts = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: req.user.productsCart.length,
    data: req.user.productsCart,
  });
});

// -------------------------------------------------------------------------------
// ADD CART PRODUCT
// -------------------------------------------------------------------------------

export const addUserCartProducts = catchAsync(async (req, res, next) => {
  // Info
  const { product, quantity, colorname, size } = req.body;

  // Check if quantity is an integer
  if (!Number.isInteger(quantity)) {
    return next(
      new AppError(quantity + ' is not an integer value', 404, {
        quantity: 'Debe ser un número entero',
      })
    );
  }

  // Check if product exists
  const doc = await Product.findById(product);
  if (!doc) {
    return next(
      new AppError('No document found with that ID', 404, {
        product: 'No existe un producto con ese id',
      })
    );
  }

  let valid = false;
  let productSize = {};

  // Check if is a valid product (Color and size)
  for (let color of doc.subcategory.color) {
    if (color.colorname === colorname) {
      for (let colorSize of color.sizes) {
        if (colorSize.size === size) {
          valid = true;
          productSize = colorSize;
        }
      }
    }
  }

  if (!valid) {
    return next(
      new AppError('The cart product you try to add is not valid', 404, {
        product: 'No es un producto valido',
      })
    );
  }

  const productsCart = req.user.productsCart;

  // Check if product already in cart
  let exists = false;
  for (let cartProduct of productsCart) {
    if (
      cartProduct.product.id == product &&
      cartProduct.colorname === colorname &&
      cartProduct.size === size
    ) {
      if (cartProduct.quantity + quantity > productSize.quantity) {
        return next(
          new AppError('Quantity exceeds existence', 400, {
            quantity: 'La cantidad excede la existencia',
          })
        );
      }
      cartProduct.quantity += quantity;
      exists = true;
    }
  }

  if (!exists) {
    if (quantity > productSize.quantity) {
      return next(
        new AppError('Quantity exceeds existence', 400, {
          quantity: 'La cantidad excede la existencia',
        })
      );
    }
    productsCart.push({ product, quantity, colorname, size });
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    { productsCart },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: 'success',
    results: productsCart.length,
    data: updatedUser,
  });
});
// export const updateUserCartProducts = updateOne(User);
// export const deleteUserCartProducts = deleteOne(User);
