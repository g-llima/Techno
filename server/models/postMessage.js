import mongoose from "mongoose";

const postInterface = mongoose.Schema({
  title: String,
  description: String,
  author: String,
  tags: [String],
  selectedFile: String,
  linkeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

let PostMessage = mongoose.model("PostMessage", postInterface);

export default PostMessage;
