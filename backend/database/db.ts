const sqlite = require("better-sqlite3");
const path = require("path");
const db = new sqlite(path.resolve("./database/applications.db"), { fileMustExist: true });

function query(sql: string) {
  return db.prepare(sql).all();
}

module.exports = { query };
