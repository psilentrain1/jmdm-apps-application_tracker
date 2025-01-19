const db = require("../database/db")
import { applicationData, sorting } from "../types/applications.types"

function getApplications() {
    const data = db.query("SELECT * FROM applications;")
    return data
}

function filterApplications(params: sorting) {
    let filter = ""
    let sort = ""
    if (params.filtercol != "0") {
        filter = ` WHERE ${params.filtercol}='${params.filterdata}'`
    }
    if (params.sortcol != "0") {
        sort = ` ORDER BY ${params.sortcol}`
    }

    const query = `SELECT * FROM applications${filter}${sort};`
    const data = db.query(query)
    return data
}

function getEntry(id: number) {
    const data = db.query(`SELECT * FROM applications WHERE id = ${id};`)
    return data
}

function editEntry(entryObj: applicationData) {
    const result = db.run(
        `UPDATE applications SET title = '${entryObj.title}', company = '${
            entryObj.company
        }', location = '${entryObj.location}', type = '${
            entryObj.type
        }', industry = '${entryObj.industry}', status = '${
            entryObj.status
        }', apply_date = '${entryObj.apply_date}', interview_date = '${
            entryObj.interview_date == "" ? null : entryObj.interview_date
        }', reject_date = '${
            entryObj.reject_date == "" ? null : entryObj.reject_date
        }', notes = '${entryObj.notes}' WHERE id=${entryObj.id};`
    )
    let response = "error"
    if (result.changes) {
        response = "ok"
    }
    return { response }
}

function newEntry(entryObj: applicationData) {
    const result = db.run(
        `INSERT INTO applications(title, company, location, type, industry, status, apply_date, interview_date, reject_date, notes) VALUES ('${
            entryObj.title
        }', '${entryObj.company}', '${entryObj.location}', '${
            entryObj.type
        }', '${entryObj.industry}', '${entryObj.status}', '${
            entryObj.apply_date
        }', '${
            entryObj.interview_date == "" ? null : entryObj.interview_date
        }', '${entryObj.reject_date == "" ? null : entryObj.reject_date}', '${
            entryObj.notes
        }');`
    )
    let response = "error"
    if (result.changes) {
        response = "ok"
    }
    return { response }
}

function delEntry(id: number) {
    const result = db.run(`DELETE FROM applications WHERE id=${id};`)
    let response = "error"
    if (result.changes) {
        response = "ok"
    }
    return { response }
}

module.exports = {
    getApplications,
    filterApplications,
    getEntry,
    editEntry,
    newEntry,
    delEntry,
}
