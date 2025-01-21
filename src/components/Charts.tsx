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
        title: {
            text: "Applications by Industry",
        },
    })

    const [chart_AppSubsByTitle, setChart_AppSubsByTitle] = useState({
        data: [],
        series: [
            { type: "pie", angleKey: "COUNT(id)", sectorLabelKey: "title" },
        ],
        title: {
            text: "Applications by Job Title",
        },
    })

    const [chart_AppSubsByType, setChart_AppSubsByType] = useState({
        data: [],
        series: [{ type: "bar", xKey: "type", yKey: "COUNT(id)" }],
        title: {
            text: "Applications by Job Type",
        },
    })

    const [chart_History, setChart_History] = useState({
        data: [],
        series: [
            {
                type: "line",
                xKey: "dates",
                yKey: "num_applications",
                yName: "Applications",
                stroke: "orange",
                marker: {
                    fill: "orange",
                },
            },
            {
                type: "line",
                xKey: "dates",
                yKey: "num_interviews",
                yName: "Interviews",
                stroke: "green",
                marker: {
                    fill: "green",
                    shape: "square",
                },
            },
            {
                type: "line",
                xKey: "dates",
                yKey: "num_rejections",
                yName: "Rejections",
                stroke: "red",
                marker: {
                    fill: "red",
                    shape: "triangle",
                },
            },
        ],
        title: {
            text: "Application History",
        },
    })

    useEffect(() => {
        axios.get(SERVER_URL + "chart/appIndustry").then(({ data }) => {
            setChart_AppByIndustry({ ...chart_AppByIndustry, data: data })
        })
        axios.get(SERVER_URL + "chart/appType").then(({ data }) => {
            setChart_AppSubsByType({ ...chart_AppSubsByType, data: data })
        })
        axios.get(SERVER_URL + "chart/appTitle").then(({ data }) => {
            setChart_AppSubsByTitle({ ...chart_AppSubsByTitle, data: data })
        })
        axios.get(SERVER_URL + "chart/big").then(({ data }) => {
            data.pop()
            setChart_History({ ...chart_History, data: data })
        })
    }, [])

    return (
        <>
            <AgCharts options={chart_History} />
            <AgCharts options={chart_AppSubsByTitle} />
            <AgCharts options={chart_AppByIndustry} />
            <AgCharts options={chart_AppSubsByType} />
        </>
    )
}
