import express from "express";

const app = express();

app.use("/health", (_req, res) => {
  res.status(200).send("Ok");
});

app.listen(3001, () => {
  console.log(`listening on port ${3001}`);
});
