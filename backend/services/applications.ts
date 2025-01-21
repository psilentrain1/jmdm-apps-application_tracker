const db = require("../database/db")
import { aag, applicationData, sorting } from "../types/applications.types"

function getApplications() {
    const data = db.query("SELECT * FROM applications;")
    return data
}

function getAAG(aag: aag) {
    const weekdata = db.query(
        `SELECT COUNT(*) FROM applications WHERE apply_date BETWEEN '${aag.weekstart}' AND '${aag.weekend}';`
    )
    const monthdata = db.query(
        `SELECT COUNT(*) FROM applications WHERE apply_date BETWEEN '${aag.monthstart}' AND '${aag.monthend}';`
    )

    const data = [weekdata[0]["COUNT(*)"], monthdata[0]["COUNT(*)"]]
    return data
}

function filterApplications(params: sorting) {
    let filter = ""
    let sort = ""
    if (params.filtercol != "none") {
        filter = ` WHERE ${params.filtercol}='${params.filterdata}'`
    }
    if (params.sortcol != "none") {
        sort = ` ORDER BY ${params.sortcol} ${params.sortdir}`
    } else if (params.sortcol == "none") {
        sort = ` ORDER BY id ${params.sortdir}`
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

// chart queries
function chart(chart: string) {
    let query = ""

    switch (chart) {
        case "appIndustry":
            query = `SELECT industry, COUNT(id) FROM applications GROUP BY industry;`
            break
        case "appHistory":
            query = `SELECT apply_date, COUNT(id) FROM applications GROUP BY apply_date;`
            break
        case "appType":
            query = `SELECT type, COUNT(id) FROM applications GROUP BY type;`
            break
        case "intHistory":
            query = `SELECT interview_date, COUNT(id) FROM applications GROUP BY interview_date;`
            break
        case "rejHistory":
            query = `SELECT reject_date, COUNT(id) FROM applications GROUP BY reject_date;`
            break
        default:
            query = `-- database: /Users/psilentrain1/Documents/development/jmdm-apps-application_tracker/backend/database/applications.db

WITH combined_dates AS (
    SELECT apply_date AS date FROM applications WHERE apply_date IS NOT NULL
    UNION
    SELECT interview_date AS date FROM applications WHERE interview_date IS NOT NULL
    UNION
    SELECT reject_date AS date FROM applications WHERE reject_date IS NOT NULL
)
SELECT
    cd.date AS dates,
    COUNT(t1.apply_date) AS num_applications,
    COUNT(t1.interview_date) AS num_interviews,
    COUNT(t1.reject_date) AS num_rejections
FROM combined_dates cd
LEFT JOIN applications t1 ON cd.date = t1.apply_date
    OR cd.date = t1.interview_date
    OR cd.date = t1.reject_date
GROUP BY cd.date
ORDER BY cd.date;
`
    }

    const data = db.query(query)
    return data
}

module.exports = {
    getApplications,
    filterApplications,
    getEntry,
    editEntry,
    newEntry,
    delEntry,
    getAAG,
    chart,
}
