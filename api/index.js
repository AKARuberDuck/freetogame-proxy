import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/games", async (req, res) => {
  try {
    const response = await fetch("https://www.freetogame.com/api/games");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
