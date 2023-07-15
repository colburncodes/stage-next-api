import mongoose, { Schema, model, models } from "mongoose";

const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
    experience: {
      type: String,
      required: false,
    },
    workType: {
      type: String,
      required: true,
    },
    salaryFrom: {
      type: String,
      required: false,
    },
    salaryTo: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

export const Job = models.Job || model("Job", jobSchema);
