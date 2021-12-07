import mongoose from 'mongoose';
import validator from 'validator';

const businessOrderSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: [true, 'No puede estar vacío'],
      trim: true,
    },
    clientEmail: {
      type: String,
      required: [true, 'No puede estar vacío'],
      validate: [validator.isEmail, 'Debe ser un email válido'],
    },
    clientCellphone: {
      type: Number,
      required: [true, 'No puede estar vacío'],
      minlength: [10, 'Un Número telefónico tiene 10 digitos'],
    },
    employeeName: {
      type: String,
      required: [true, 'No puede estar vacío'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'No puede estar vacío'],
      trim: true,
      validate: {
        validator: function (value) {
          return validator.isAlphanumeric(value.split(' ').join(''), 'es-ES', {
            ignore: ',.!¡¿?"()',
          });
        },
        message: 'Solo puede contener caracteres y números',
      },
    },
    products: {
      type: [
        {
          quantity: {
            type: Number,
            required: [true, 'Debe tener una cantidad'],
          },
          price: {
            type: Number,
            required: [true, 'Debe tener un precio'],
          },
          product: {
            type: String,
            required: [true, 'No puede estar vacío'],
          },
        },
      ],
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: 'Debe tener al menos un elemento',
      },
    },
    totalPrice: {
      type: Number,
      required: [true, 'Debe tener un precio'],
    },
    active: {
      type: Boolean,
      default: true,
    },
    date: {
      type: Date,
      required: [true, 'No puede estar vacío'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Una cita debe pertenecer a un usuario'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// --------------- POPULATE APPOINTMENT -----------------
businessOrderSchema.pre(/^find/, function (next) {
  this.populate('user', 'name photo');
  next();
});

const BusinessOrder = mongoose.model('BusinessOrder', businessOrderSchema);

export default BusinessOrder;
