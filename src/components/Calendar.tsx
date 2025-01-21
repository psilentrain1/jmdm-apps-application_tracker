import { useEffect } from "react"
import { Calendar, type Options } from "vanilla-calendar-pro"
import "vanilla-calendar-pro/styles/index.css"

export function Schedule() {
    const calendarOptions: Options = {
        styles: {
            calendar: "calendar__body",
            month: "calendar__month",
            year: "calendar__year",
            weekDay: "calendar__weekDay",
            date: "calendar__date",
            dateBtn: "calendar__dateBtn",
        },
        firstWeekday: 0,
    }

    useEffect(() => {
        const calendar = new Calendar("#mini-calendar", calendarOptions)
        calendar.init()
    }, [])

    return (
        <>
            <div id="mini-calendar"></div>
        </>
    )
}
