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
    phone: {
      type: String,
      required: true,
    },
    careerObjective: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    // additional fields for developer
    skills: {
      type: [],
      required: false,
    },
    education: {
      type: [],
      required: false,
    },
    experience: {
      type: [],
      required: false,
    },

    // additional fields for employer
    establishedYear: {
      type: String,
      required: false,
    },
    companySize: {
      type: String,
      required: false,
    },
    companyInfo: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model("User", userSchema);
