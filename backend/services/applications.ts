const db = require("../database/db")
import { applicationData } from "../types/applications.types"

function getApplications() {
    const data = db.query("SELECT * FROM applications;")
    return data
}

function getEntry(id: number) {
    const data = db.query(`SELECT * FROM applications WHERE id = ${id};`)
    return data
}

function editEntry(entryObj: applicationData) {
    const data = db.run(
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
    console.log(data)
}

function newEntry(entryObj: applicationData) {
    const data = db.run(
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
    console.log(data)
}

module.exports = { getApplications, getEntry, editEntry, newEntry }
