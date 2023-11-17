import "dotenv/config";
import express from "express";
import database from "./database/database.js";
import UserRouter from "./routes/url.js";
import URL from "./models/url.js";
import route from "./routes/staticRoutes.js";

const app = express();
const port = process.env.PORT || 3000;
database;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/url", UserRouter);
app.use("/", route);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.urlId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.origURL);
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});