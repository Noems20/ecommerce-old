import mongoose from 'mongoose';
import slugify from 'slugify';

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'No puede estar vacío'],
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
      required: [true, 'No puede estar vacío'],
    },
    category: {
      type: String,
      required: [true, 'No puede estar vacío'],
    },
    catalog: {
      type: String,
      enum: {
        values: ['ropa', 'agendas', 'regalos', 'encuadernados'],
        message: 'Catálogo debe ser: ropa, agendas, regalos ó encuadernados',
      },
      required: [true, 'No puede estar vacío'],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1'],
      max: [5, 'Rating must be below 5'],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Debe tener precio'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.index({ price: 1, ratingsAverage: -1 });
productSchema.index({ slug: 1 });

// Virtual populate
productSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product', // How is called in review model
  localField: '_id', // How is called in local model
});

// DOCUMENT MIDDLEWARE runs before .save() and .create() not insertMany(), update(), findOneAndUpdate()
productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Product = mongoose.model('Product', productSchema);

export default Product;
