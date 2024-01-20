import { Schema, model, models } from "mongoose";

const newsletterSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now("en-GB"),
  },
});

export const Users = models.Users || model("Users", newsletterSchema);
