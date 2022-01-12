import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

// Validators run in: findByIdAndUpdate(if specified), create, save
// But validators using this. keyword only run on CREATE and SAVE

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'No puede estar vacío'],
      trim: true,
      minlength: [3, 'Necesita ser mayor a 2 caracteres'],
      maxlength: [35, 'Necesita ser menor a 36 caracteres'],
      validate: {
        validator: function (value) {
          return validator.isAlpha(value.split(' ').join(''), 'es-ES');
        },
        message: 'Solo debe contener caracteres',
      },
    },
    email: {
      type: String,
      required: [true, 'No puede estar vacío'],
      unique: true,
      validate: [validator.isEmail, 'Debe ser un email válido'],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    photo: { type: String, default: 'default.jpg' },
    role: {
      type: String,
      enum: {
        values: ['user', 'employee', 'admin'],
        message: 'Debe ser un rol válido',
      },
      default: 'user',
    },
    productsCart: {
      type: [
        {
          product: {
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
            required: [true, 'Debe pertenecer a un producto'],
          },
          name: { type: String, required: [true, 'No puede estar vacío'] },
          slug: {
            type: String,
          },
          for: { type: String, required: [true, 'No puede estar vacío'] },
          image: {
            type: String,
            required: [true, 'No puede estar vacío'],
          },
          colorname: {
            type: String,
            minlength: [3, 'Necesita ser mayor a 2 caracteres'],
            maxlength: [6, 'Necesita ser menor a 7 caracteres'],
            required: [true, 'Debe tener un color'],
            validate: {
              validator: (val) => validator.isHexadecimal(val),
              message: 'Introduce un color en formato hexadecimal',
            },
          },
          size: {
            type: String,
            required: [true, 'No puede estar vacío'],
          },
          quantity: {
            type: Number,
            min: [1, 'Debe tener una cantidad mayor a 0'],
            // validate: {
            //   validator: Number.isInteger,
            //   message: '{VALUE} is not an integer value',
            // },
            required: [true, 'Debe tener una cantidad'],
          },
          price: {
            type: Number,
            required: [true, 'Debe tener un precio'],
          },
          totalprice: {
            type: Number,
            required: [true, 'Debe tener un precio'],
          },
        },
      ],
      default: [],
    },
    password: {
      type: String,
      required: [true, 'No puede estar vacío'],
      minLength: [8, 'Debe ser mayor a 7 caracteres'],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'No puede estar vacío'],
      validate: {
        // Only works with CREATE and SAVE
        // Because this. only points to current doc on NEW document creation
        validator: function (el) {
          return el === this.password;
        },
        message: 'Las contraseñas no coinciden',
      },
    },
    userVerificationToken: String,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// userSchema.pre(/^find/, function (next) {
//   this.populate('productsCart.product');
//   next();
// });

// --------------------------------------- MIDDLEWARE -----------------------------------------------

// --------------- ENCRYPT PASSWORD -----------------
userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Encrypt-hash password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm Field
  this.passwordConfirm = undefined;
  next();
});

// ------------ CHANGE PASSWORD changedAt ------
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// --------------------------------------- METHODS -----------------------------------------------

// --------------- CHECK PASSWORD -----------------
userSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// --------------- CHECK IF PASSWORD WAS CHANGED -----------------
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = this.passwordChangedAt.getTime() / 1000;

    return JWTTimestamp < changedTimestamp;
  }

  // False mean NOT changed
  return false;
};
// --------------- CREATE PASSWORD RESET TOKEN -----------------
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// --------------- CREATE USER VERIFICATION TOKEN -----------------
userSchema.methods.createVerificationToken = function () {
  const verificationToken = crypto.randomBytes(32).toString('hex');

  this.userVerificationToken = crypto
    .createHash('sha256')
    .update(verificationToken)
    .digest('hex');

  return verificationToken;
};

const User = mongoose.model('User', userSchema);

export default User;
