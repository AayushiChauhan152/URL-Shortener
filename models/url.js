import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    urlId: {
      type: String,
      required: true
    },
    origURL: {
      type: String,
    },
  { timestamps: true }
);
const url = new mongoose.model("url", urlSchema);
export default url;
