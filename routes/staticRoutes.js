import express from "express";
const router = express.Router();
import URL from "../models/url.js";

router.get("/", async (req, res) => {
  const urls = await URL.find({});
  res.render("home.ejs", {
    urls: urls,
  });
});

export default router;
