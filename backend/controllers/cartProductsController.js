import User from '../models/userModel.js';
import Product from '../models/productModel.js';

import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const getUserCartProducts = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: req.user.productsCart,
  });
});

export const addUserCartProducts = catchAsync(async (req, res, next) => {
  // Info
  const { product, quantity, colorname, size } = req.body;

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

  // Check if is a valid product
  for (let color of doc.subcategory.color) {
    if (color.colorname === colorname) {
      for (let colorSize of color.sizes) {
        if (colorSize.size === size && colorSize.quantity >= quantity) {
          valid = true;
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
  productsCart.push({ product, quantity, colorname, size });

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
    data: updatedUser.productsCart,
  });
});
// export const updateUserCartProducts = updateOne(User);
// export const deleteUserCartProducts = deleteOne(User);
