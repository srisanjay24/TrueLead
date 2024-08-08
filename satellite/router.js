const { Router } = require("express");
const { getTrendsData } = require("./helpers/getTrendsWithQuery.js");
const router = Router();

//all routes:
router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/trends/:query", (req, res) => {
  const query = req.params.query;
  getTrendsData(query, (trendsData) => {
    res.json(trendsData);
  });
});

module.exports = router;
