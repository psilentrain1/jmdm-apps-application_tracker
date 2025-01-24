import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { HiOutlineBell, HiPlus, HiSearch } from "react-icons/hi"
import { Link, useNavigate } from "react-router"
import { SERVER_URL } from "../util/server"
import { applicationData } from "../types/applications.types"

export function Header() {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState(
        <span className="no-result">No Results</span>
    )
    const resultsRef = useRef<HTMLDivElement>(null)

    const search = document.getElementById("search")
    const searchResultsList = document.getElementById("searchResults")

    function handleBlur(event: React.FocusEvent) {
        if (!resultsRef.current?.contains(event.relatedTarget as Node)) {
            searchResultsList?.classList.remove("show-results")
        } else {
            searchResultsList?.addEventListener("click", (e) => {
                event.preventDefault()
                const link = e.target?.closest("a")
                navigate(link.pathname)
                searchResultsList?.classList.remove("show-results")
            })
        }
    }

    function getSearchResults() {
        if (searchQuery.length >= 3) {
            if (document.activeElement === search) {
                searchResultsList?.classList.add("show-results")
            }
            axios.get(SERVER_URL + "search/" + searchQuery).then(({ data }) => {
                // Add rows to search results
                if (data.length == 0) {
                    setSearchResults(
                        <span className="no-result">No Results</span>
                    )
                } else {
                    const resultRows: string[] = []
                    for (let i = 0; i < data.length; i++) {
                        resultRows.push(searchResult(data[i]))
                    }

                    setSearchResults(resultRows)
                }
            })
        }
    }

    function searchResult(data: applicationData) {
        return (
            <>
                <div className="result" key={`search-${data.id}`}>
                    <div className="result__title">
                        <Link to={`/edit/${data.id}`}>{data.title}</Link>
                    </div>
                    <div className="result__company">{data.company}</div>
                </div>
            </>
        )
    }

    useEffect(() => {
        getSearchResults()
    }, [searchQuery])
    return (
        <>
            <header>
                <div className="search">
                    <div className="search-component">
                        <form action="">
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onBlur={handleBlur}
                            />
                            <HiSearch />
                        </form>
                        <div
                            id="searchResults"
                            className="search-results"
                            ref={resultsRef}
                        >
                            {searchResults}
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button type="button">
                        <HiOutlineBell />
                    </button>
                    <Link to="/edit/new">
                        <HiPlus />
                    </Link>
                </div>
            </header>
        </>
    )
}
