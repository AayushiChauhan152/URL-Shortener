import express from "express";
const router = express.Router();
import  shortURL from "../controllers/url.js";

router.post("/", shortURL);
export default router;
