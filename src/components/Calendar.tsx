import { useEffect, useState } from "react"
import { Calendar, type Options } from "vanilla-calendar-pro"
import "vanilla-calendar-pro/styles/index.css"
import { SERVER_URL } from "../util/server"
import axios from "axios"

export function Schedule() {
    const [interviewDates, setInterviewDates] = useState({})

    function getInterviewDates() {
        axios.get(SERVER_URL + "cal/int").then(({ data }) => {
            const dates = {}
            for (let i = 0; i < data.length; i++) {
                dates[data[i].interview_date] = {
                    modifier: "calendar__interview",
                    html: `<div><h3>${data[i].title}</h3><p>${data[i].company}</p></div>`,
                }
            }
            // console.log(dates)
            setInterviewDates(dates)
        })
    }

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
        popups: interviewDates,
    }

    useEffect(() => {
        getInterviewDates()
    }, [])

    useEffect(() => {
        const calendar = new Calendar("#mini-calendar", calendarOptions)
        calendar.init()
    }, [interviewDates])

    return (
        <>
            <div id="mini-calendar"></div>
        </>
    )
}
