const { getJson } = require("serpapi");
const dotenv = require("dotenv");
dotenv.config();
const key = process.env.SAPI_KEY;

function getTrendsData(query, callback) {
  getJson(
    {
      engine: "google_trends",
      q: query,
      data_type: "TIMESERIES",
      api_key: key,
    },
    (json) => {
      callback(json["interest_over_time"]);
    },
  );
}

module.exports = { getTrendsData };
