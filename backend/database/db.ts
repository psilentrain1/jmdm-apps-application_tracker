import sqlite from "better-sqlite3"
import path from "path"
const db = new sqlite(path.resolve("./database/applications.db"), {
    fileMustExist: true,
})

function query(sql: string) {
    return db.prepare(sql).all()
}

function run(sql: string) {
    return db.prepare(sql).run()
}

export { query, run }
