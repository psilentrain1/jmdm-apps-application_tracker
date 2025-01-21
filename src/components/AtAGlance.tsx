import axios from "axios"
import { SERVER_URL } from "../util/server"
import { aag } from "../types/applications.types"
import {
    endOfWeek,
    startOfWeek,
    formatISO,
    startOfMonth,
    endOfMonth,
} from "date-fns"
import { useEffect } from "react"

export function AtAGlance() {
    function getAAGData() {
        const weekCount = document.getElementById("aag__apps__week")
        const monthCount = document.getElementById("aag__apps__month")
        const today = new Date()

        const aag: aag = {
            weekstart: formatISO(startOfWeek(today), {
                representation: "date",
            }),
            weekend: formatISO(endOfWeek(today), { representation: "date" }),
            monthstart: formatISO(startOfMonth(today), {
                representation: "date",
            }),
            monthend: formatISO(endOfMonth(today), { representation: "date" }),
        }

        axios.post(SERVER_URL + "aag/", aag).then(({ data }) => {
            weekCount.innerText = data[0]
            monthCount.innerText = data[1]
        })
    }

    useEffect(() => {
        getAAGData()
    }, [])

    return (
        <>
            <div className="aag">
                <h2>At a Glance:</h2>
                <p className="aag__apps">
                    <span id="aag__apps__week">xx</span> applications this week.
                </p>
                <p className="aag__apps">
                    <span id="aag__apps__month">xx</span> applications this
                    month.
                </p>
            </div>
        </>
    )
}
