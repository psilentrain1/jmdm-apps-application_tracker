import axios from "axios"
import { useEffect, useState } from "react"
import { HiOutlineBell, HiPlus, HiSearch } from "react-icons/hi"
import { Link } from "react-router"
import { SERVER_URL } from "../util/server"
import { applicationData } from "../types/applications.types"

export function Header() {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState(
        <span className="no-result">No Results</span>
    )

    const search = document.getElementById("search")
    const searchResultsList = document.getElementById("searchResults")

    /*     searchResultsList?.addEventListener("click", (event) => {
        event.preventDefault()

        const link = (event.target as HTMLElement).closest("a")

        console.log(link)
    }) */

    /*     search?.addEventListener("blur", (event) => {
        // console.log(event.relatedTarget.nodeName)
        if (event.relatedTarget && event.relatedTarget.nodeName == "A") {
            console.log("")
        } else {
            searchResultsList?.classList.remove("show-results")
        }
    }) */

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
            // if search box has focus, show the results
        } /* else {
            searchResultsList?.classList.remove("show-results")
        } */
    }

    function searchResult(data: applicationData) {
        return (
            <>
                <div className="result" key={data.id}>
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
                            />
                            <HiSearch />
                        </form>
                        <div id="searchResults" className="search-results">
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
