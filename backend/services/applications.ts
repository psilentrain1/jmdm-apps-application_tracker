const db = require("../database/db");

function getApplications() {
  const data = db.query("SELECT * FROM applications;");
  return data;
}

function getEntry(id: number) {
  const data = db.query(`SELECT * FROM applications WHERE id = ${id};`);
  return data;
}

module.exports = { getApplications, getEntry };
