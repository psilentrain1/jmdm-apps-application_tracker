import { Calendar, type Options } from "vanilla-calendar-pro"
import "vanilla-calendar-pro/styles/index.css"

export function Schedule() {
    const calendarOptions: Options = {
        styles: {
            calendar: "calendar__body",
            weekDay: "calendar__weekDay",
            date: "calendar__date",
            dateBtn: "calendar__dateBtn",
        },
        firstWeekday: 0,
    }

    const calendar = new Calendar("#calendar", calendarOptions)
    calendar.init()

    return (
        <>
            <div id="calendar"></div>
        </>
    )
}
