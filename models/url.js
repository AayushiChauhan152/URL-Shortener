import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  urlId: {
    type: String,
  },
  origURL: {
    type: String,
  },
});
const url = new mongoose.model("url", urlSchema);
export default url;
