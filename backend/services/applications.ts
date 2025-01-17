const db = require("../database/db");

function getApplications() {
  const data = db.query("SELECT * FROM applications;");
  //   console.log("getApp", data);
  return data;
}

module.exports = { getApplications };
