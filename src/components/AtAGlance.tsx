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
    async function getAAGData() {
        const weekCount = document.getElementById(
            "aag__apps__week"
        ) as HTMLSpanElement
        const monthCount = document.getElementById(
            "aag__apps__month"
        ) as HTMLSpanElement
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

        try {
            const response = await fetch(`${SERVER_URL}aag/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(aag),
            })
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            const aagData = await response.json()

            weekCount.innerText = aagData[0]
            monthCount.innerText = aagData[1]
        } catch (error) {
            console.error("Error fetching AAG data:", error)
        }
    }

    useEffect(() => {
        getAAGData()
    })

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
