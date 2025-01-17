const express = require("express");
const app = express();
const port = 3000;
const appRouter = require("./routes/application.route");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Ping!" });
  console.log("ping");
});

app.use("/applications", appRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
