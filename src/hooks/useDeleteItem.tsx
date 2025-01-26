import toast from "react-hot-toast"
import { SERVER_URL } from "../util/server"
import axios from "axios"

export default function useDeleteItem() {
    // TODO: Get confirmation before deleting from the db

    async function deleteItem(appid: number) {
        try {
            const { data: response } = await axios.get(
                SERVER_URL + "delete/" + appid
            )
            console.log(response)
            toast.success("Application Deleted")
        } catch (error) {
            console.error(error)
        }
    }

    return deleteItem
}
