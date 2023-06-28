import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    userType: {
      type: String,
      required: true,
      default: "developer",
    },
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

export const User = models.User || model("User", userSchema);
