import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    urlId: {
      type: String,
      unique: true,
    },
    origURL: {
      type: String,
    },
    visitedHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);
const url = new mongoose.model("url", urlSchema);
export default url;
