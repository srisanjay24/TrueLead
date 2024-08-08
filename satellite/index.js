const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./router.js");
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use("/api", router);

app.listen(port, () => {
  console.log(`listening @ port ${port}`);
});
