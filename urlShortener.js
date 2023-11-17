import "dotenv/config";
import express from "express";
import database from "./database/database.js";
import UserRouter from "./routes/url.js";
import URL from "./models/url.js";
import route from "./routes/staticRoutes.js";

const app = express();
const port = 3000 || process.env.PORT;
database;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/url", UserRouter);
app.use("/", route);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.urlId;
  const entry = await URL.findOne({shortId});
  res.redirect(entry.origURL);
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
