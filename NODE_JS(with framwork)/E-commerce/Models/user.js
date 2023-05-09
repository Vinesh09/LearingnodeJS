const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide valid email !"],
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      maxlength: 12,
      minlength: 10,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    confirmPassword: {
      type: String,
      select: false,
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Password and Confirm-password are not same !",
      },
    },
    isActive: {
      type: Boolean,
      default: true,
      select: false,
    },

    // createdAt: {
    //   type: Date,
    //   immutable: true,
    //   default: new Date().now,
    // },

    // updatedAt: {
    //   type: Date,
    //   default: new Date(),
    // },
  },
  { timestamps: true }
);

// document middle ware
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete confirmPassword field
  this.confirmPassword = undefined;
  next();
});
userSchema.methods.correctPassword = async (EnteredPwd, userPwd) => {
  return await bcrypt.compare(EnteredPwd, userPwd);
};

//Export the model
module.exports = mongoose.model("User", userSchema);
