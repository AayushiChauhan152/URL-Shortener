import mongoose from "mongoose";

const database = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

export default database;
