const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/api/:albumId/images", async (req, res) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${req.params.albumId}/photos`
  );
  let data = await response.json();
  const formatter = ({ id, title, thumbnailUrl }) => {
    return { id, title, thumbnailUrl };
  };
  data = data.map(formatter);
  res.json(data);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
