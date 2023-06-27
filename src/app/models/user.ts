import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// delete old model
// const userModel = mongoose.model("user");
// mongoose.deleteModel(userModel.modelName);

// // create new model
// module.exports = mongoose.model("users", userSchema)
export const User = models.User || model("User", userSchema);
