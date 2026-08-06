import mongoose, { Schema } from "mongoose";

const blogsSchema = new Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", blogsSchema);

export default Blogs;