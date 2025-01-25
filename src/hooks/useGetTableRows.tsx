import { useEffect, useState } from "react"
import { HiPencil, HiTrash } from "react-icons/hi"
import { Link } from "react-router"
import { applicationData, sorting } from "../types/applications.types"
import { SERVER_URL } from "../util/server"
import axios from "axios"
import useDeleteItem from "./useDeleteItem"

export function useGetTableRows(filterSort: sorting) {
    const [appList, setAppList] = useState<applicationData>({})
    const [outputRows, setOutputRows] = useState([])

    const deleteItem = useDeleteItem()

    // TODO: change this to useQuery
    async function fetchData() {
        try {
            const { data: response } = await axios.get(
                SERVER_URL +
                    "filter/" +
                    filterSort.sortcol +
                    "/" +
                    filterSort.sortdir +
                    "/" +
                    filterSort.filtercol +
                    "/" +
                    filterSort.filterdata
            )
            setAppList(response)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [filterSort])

    useEffect(() => {
        populateTable()
    }, [appList])

    function populateTable() {
        const applicationElements = []

        for (const idx in appList) {
            applicationElements.push(createAppItem(appList[idx]))
        }
        setOutputRows(applicationElements)
    }

    function createAppItem(app: applicationData) {
        let dateTitle: string = ""
        let dateDate: string = ""

        switch (String(app.status)) {
            case "Applied":
                dateTitle = "Date Applied"
                dateDate = String(app.apply_date)
                break
            case "Interview":
                dateTitle = "Interview Date"
                dateDate = String(app.interview_date)
                break
            case "Rejected":
                dateTitle = "Rejected Date"
                dateDate = String(app.reject_date)
        }

        return (
            <div className="applist-item" key={app.id}>
                <div className="applist-item__info">
                    <div className="applist-item__info__title">
                        <Link to={`/edit/${app.id}`}>{app.title}</Link>
                    </div>
                    <div className="applist-item__info__company">
                        {app.company}
                    </div>
                </div>
                <div className={`applist-item__status ${app.status}`}>
                    {app.status}
                </div>
                <div className="applist-item__date">
                    <div className="applist-item__date__title">
                        {dateTitle}:
                    </div>
                    <div className="applist-item__date__date">{dateDate}</div>
                </div>
                <div className="applist-item__location">
                    <div className="applist-item__location__type">
                        {app.type}
                    </div>
                    <div className="applist-item__location__city">
                        {app.location}
                    </div>
                </div>
                <div className="applist-item__notes">{app.notes}</div>
                <div className="applist-item__buttons">
                    <Link to={`/edit/${app.id}`}>
                        <HiPencil />
                    </Link>
                    <button
                        onClick={async () => {
                            await deleteItem(app.id)
                            fetchData()
                        }}
                    >
                        <HiTrash />
                    </button>
                </div>
            </div>
        )
    }

    return outputRows
}
