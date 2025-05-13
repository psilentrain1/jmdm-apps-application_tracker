import { useEffect, useState } from "react"
import { applicationData } from "../types/applications.types"
import { SERVER_URL } from "../util/server"
import axios from "axios"

export function useGetApplication(appid: string) {
    const [entryData, setEntryData] = useState<applicationData>({})
    const [isLoading, setIsLoading] = useState(true)

    function getApplications() {
        try {
            axios.get(SERVER_URL + "entry/" + appid).then(({ data }) => {
                const cleanedData = {
                    id: data[0].id,
                    title: data[0].title,
                    company: data[0].company,
                    location: data[0].location ? data[0].location : "",
                    type: data[0].type,
                    industry: data[0].industry ? data[0].industry : "",
                    status: data[0].status,
                    apply_date: data[0].apply_date ? data[0].apply_date : "",
                    interview_date: data[0].interview_date
                        ? data[0].interview_date
                        : "",
                    reject_date: data[0].reject_date ? data[0].reject_date : "",
                    notes: data[0].notes ? data[0].notes : "",
                }
                setEntryData(cleanedData)
                setIsLoading(false)
            })
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (appid != "new") {
            setIsLoading(true)
            getApplications()
        }
    }, [appid])

    return { data: entryData, isLoading }
}
