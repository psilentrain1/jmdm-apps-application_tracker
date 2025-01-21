import { AgCharts } from "ag-charts-react"
import axios from "axios"
import { useEffect, useState } from "react"
import { SERVER_URL } from "../util/server"

export function Charts() {
    const [chart_AppByIndustry, setChart_AppByIndustry] = useState({
        data: [],
        series: [
            { type: "pie", angleKey: "COUNT(id)", sectorLabelKey: "industry" },
        ],
    })

    const [chart_AppSubmissionHistory, setChart_AppSubmissionHistory] =
        useState({
            data: [],
            series: [{ type: "line" }],
        })

    const [chart_AppSubsByType, setChart_AppSubsByType] = useState({
        data: [],
        series: [{ type: "bar", xKey: "type", yKey: "COUNT(id)" }],
    })

    const [chart_InterviewHistory, setChart_InterviewHistory] = useState({
        data: [],
        series: [{ type: "line" }],
    })

    const [chart_AppsVRejections, setChart_AppsVRejections] = useState({
        data: [],
        series: [{ type: "line" }],
    })

    const [chart_History, setChart_History] = useState({
        data: [],
        series: [
            {
                type: "line",
                xKey: "dates",
                yKey: "num_applications",
                yName: "Applications",
            },
            {
                type: "line",
                xKey: "dates",
                yKey: "num_interviews",
                yName: "Interviews",
            },
            {
                type: "line",
                xKey: "dates",
                yKey: "num_rejections",
                yName: "Rejections",
            },
        ],
    })

    useEffect(() => {
        axios.get(SERVER_URL + "chart/appIndustry").then(({ data }) => {
            setChart_AppByIndustry({ ...chart_AppByIndustry, data: data })
        })
        axios.get(SERVER_URL + "chart/appType").then(({ data }) => {
            setChart_AppSubsByType({ ...chart_AppSubsByType, data: data })
        })
        axios.get(SERVER_URL + "chart/big").then(({ data }) => {
            setChart_History({ ...chart_History, data: data })
        })
    }, [])

    return (
        <>
            <AgCharts options={chart_AppByIndustry} />
            {/* <AgCharts options={chart_AppSubmissionHistory} /> */}
            <AgCharts options={chart_AppSubsByType} />
            {/* <AgCharts options={chart_InterviewHistory} /> */}
            {/* <AgCharts options={chart_AppsVRejections} /> */}
            <AgCharts options={chart_History} />
        </>
    )
}
