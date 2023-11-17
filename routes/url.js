import express from "express";
const router = express.Router();
import { shortURL, getAnalytics } from "../controllers/url.js";

router.post("/", shortURL);
router.get("/analytics/:shortId", getAnalytics);

export default router;
