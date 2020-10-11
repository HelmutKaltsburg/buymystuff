import mongoose from "mongoose";

// Define the database fields for the "user" table/collection
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

// Initialize a User object model using Mongoose with the userSchema
const User = mongoose.model("User", userSchema);

export default User;
