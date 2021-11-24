import multer from 'multer';
import sharp from 'sharp';

// MODELS
import Product from '../models/productModel.js';

// UTILS
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

// HANDLER FACTORY
import {
  deleteOne,
  updateOne,
  // createOne,
  getOne,
  getAll,
} from './handlerFactory.js';

export const aliasTopProducts = (req, res, next) => {
  req.query.limit = '10';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage, ratingsQuantity,description';
  next();
};

// ----------------- FILE UPLOAD ----------------
// Image stores as a buffer
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(
      new AppError('Not an image! Please upload only images.', 400, {
        image: 'Por favor selecciona una imagen',
      }),
      false
    );
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

export const uploadImage = upload.single('subcategory[color][0][image]');

export const getAllProducts = getAll(Product);
export const getProduct = getOne(Product, { path: 'reviews' });
// export const createProduct = createOne(Product);
export const updateProduct = updateOne(Product);
export const deleteProduct = deleteOne(Product);

// ----------------- CREATE SERVICE -----------------------
export const createProduct = catchAsync(async (req, res, next) => {
  if (!req.file)
    return next(
      new AppError('A product image is required', 400, {
        image: 'Una imagen del producto es requerida',
      })
    );
  const doc = await Product.create(req.body);
  req.doc = doc;
  next();
});

// ----------------- RESIZE CREATED SERVICE IMAGE ----------------
export const resizeProductImage = (req, res, next) => {
  let status = 201;
  if (req.update === true) {
    status = 200;
  }

  // console.log(req.doc.subcategory.color[0].image);
  // As we saved image in memory filename doesn't exist but update needs it
  if (req.file) {
    req.file.filename = req.doc.subcategory.color[0].image;
    sharp(req.file.buffer)
      .resize({ width: 1280 })
      .withMetadata()
      .toFormat('png')
      .png({ quality: 100 })
      .toFile(`backend/public/img/products/${req.file.filename}`)
      .then(() => {
        return res.status(status).json({
          status: 'success',
          data: req.doc,
        });
      });
  } else {
    res.status(status).json({
      status: 'success',
      data: req.doc,
    });
  }
};

export const getProductStats = catchAsync(async (req, res, next) => {
  const stats = await Product.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numProducts: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
    {
      $sort: { avgPrice: 1 },
    },
    // {
    //   $match: { _id: { $ne: 'EASY' } },
    // },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});
