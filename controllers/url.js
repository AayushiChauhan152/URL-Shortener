import URL from "../models/url.js";
import { nanoid } from "nanoid";

const shortURL = async (req, res) => {
  const url = req.body.url;

  const ifExists = await URL.findOne({ origURL: url });

  if (ifExists) {
    return res.render("home.ejs", { id: ifExists.urlId });
  } else {
    const shortID = nanoid(8);

    await URL.create({
      urlId: shortID,
      origURL: req.body.url,
    });
    res.render("home.ejs", { id: shortID });
  }
};

export default shortURL;
