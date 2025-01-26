import axios from "axios"
import { applicationData } from "../types/applications.types"
import { SERVER_URL } from "../util/server"
import { useState } from "react"

export function useUpdateApplication() {
    const [updateResponse, setUpdateResponse] = useState(null)

    function updateApplication(appid: string, entryData: applicationData) {
        try {
            axios
                .post(SERVER_URL + "update/" + appid, entryData)
                .then(({ data }) => {
                    setUpdateResponse(data.response)
                })
        } catch (error) {
            console.error(error)
        }
    }

    return { updateApplication, updateResponse }
}
