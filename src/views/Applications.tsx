import { Link } from "react-router"
import { HiPencil, HiTrash } from "react-icons/hi"
import { useEffect, useState } from "react"
import axios from "axios"
import { applicationData, sorting } from "../types/applications.types"

const SERVER_URL = "http://localhost:3000/apps/"

export function Applications() {
    const [appList, setAppList] = useState<applicationData>({})
    const [appTable, setAppTable] = useState([])

    function populateTable() {
        const applicationElements = []

        for (const idx in appList) {
            applicationElements.push(createAppItem(appList[idx]))
        }
        setAppTable(applicationElements)
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
                    <button onClick={() => deleteItem(app.id)}>
                        <HiTrash />
                    </button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        axios.get(SERVER_URL).then(({ data }) => {
            setAppList(data)
        })
    }, [])

    useEffect(() => {
        populateTable()
    }, [appList])

    function deleteItem(appid: number) {
        axios.get(SERVER_URL + "del/" + appid).then(({ data }) => {
            console.log(data)
        })
        axios.get(SERVER_URL).then(({ data }) => {
            setAppList(data)
        })
    }

    const [filterSort, setFilterSort] = useState<sorting>({
        sortcol: "",
        filtercol: "",
        filterdata: "",
    })

    useEffect(() => {
        axios
            .get(
                SERVER_URL +
                    "/applications/filter/" +
                    filterSort.sortcol +
                    "/" +
                    filterSort.filtercol +
                    "/" +
                    filterSort.filterdata
            )
            .then(({ data }) => {
                console.log(data)
            })
    }, [filterSort])

    return (
        <>
            <div className="filters">
                <div className="sort">
                    <span>Sort by:</span>
                    <select
                        name="appsort"
                        id="appsort"
                        value={filterSort.sortcol}
                        onChange={(e) =>
                            setFilterSort({
                                ...filterSort,
                                sortcol: e.target.value,
                            })
                        }
                    >
                        <option value=""></option>
                        <option value="position">Position</option>
                        <option value="status">Status</option>
                        <option value="apply_date">Apply Date</option>
                    </select>
                    <label className="appsortswitch" htmlFor="appsortdir">
                        <input
                            type="checkbox"
                            name="appsortdir"
                            id="appsortdir"
                        />
                        <span className="appsortarr"></span>
                    </label>
                </div>
                <div className="filter">
                    <span>Filter by:</span>
                    <select
                        name="appfilterfield"
                        id="appfilterfield"
                        value={filterSort.filtercol}
                        onChange={(e) =>
                            setFilterSort({
                                ...filterSort,
                                filtercol: e.target.value,
                            })
                        }
                    >
                        <option value=""></option>
                        <option value="status">Status</option>
                        <option value="type">Type</option>
                        <option value="industry">Industry</option>
                        <option value="title">Job Title</option>
                    </select>
                    <select
                        name="appfilterfilter"
                        id="appfilterfilter"
                        value={filterSort.filterdata}
                        onChange={(e) =>
                            setFilterSort({
                                ...filterSort,
                                filterdata: e.target.value,
                            })
                        }
                    ></select>
                </div>
            </div>
            <div className="applist">
                {/* App list item */}
                {appTable}
                {/* End App list item */}
            </div>
        </>
    )
}
