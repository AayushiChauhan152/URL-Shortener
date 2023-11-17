import URL from "../models/url.js";
import { nanoid } from "nanoid";

export const shortURL = async (req, res) => {
  const shortID = nanoid(8);

  await URL.create({
    urlId: shortID,
    origURL: req.body.url,
    visitedHistory: [],
  });

  res.render("home.ejs", { id: shortID });
};

export const getAnalytics = async (req, res) => {
  const shortId = req.params.urlId;
  const ans = await URL.findOne({ shortId });
  return res.json({
    totalClicks: ans.visitedHistory.length,
    analytics: ans.visitedHistory,
  });
};
