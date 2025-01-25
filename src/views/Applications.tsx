import { useEffect, useState } from "react"
import { sorting } from "../types/applications.types"
import { useGetTableRows } from "../hooks/useGetTableRows"

export function Applications() {
    const [appTable, setAppTable] = useState([])
    const [filterSort, setFilterSort] = useState<sorting>({
        sortcol: "none",
        sortdir: "ASC",
        filtercol: "none",
        filterdata: "none",
    })
    const rows = useGetTableRows(filterSort)

    function changeSortDir() {
        const sortWidget = document.getElementById(
            "appsortdir"
        ) as HTMLInputElement
        if (sortWidget.checked) {
            setFilterSort({ ...filterSort, sortdir: "DESC" })
        } else {
            setFilterSort({ ...filterSort, sortdir: "ASC" })
        }
    }

    useEffect(() => {
        setAppTable(rows)
    }, [rows])

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
                        <option value="none"></option>
                        <option value="title">Title</option>
                        <option value="status">Status</option>
                        <option value="apply_date">Apply Date</option>
                    </select>
                    <label className="appsortswitch" htmlFor="appsortdir">
                        <input
                            type="checkbox"
                            name="appsortdir"
                            id="appsortdir"
                            onChange={changeSortDir}
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
                        disabled
                    >
                        <option value="none"></option>
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
                        disabled
                    ></select>
                </div>
            </div>
            <div className="applist">{appTable}</div>
        </>
    )
}
