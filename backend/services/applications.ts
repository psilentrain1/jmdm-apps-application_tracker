const db = require("../database/db");

function getApplications() {
  const data = db.query("SELECT * FROM applications;");
  return data;
}

module.exports = { getApplications };
