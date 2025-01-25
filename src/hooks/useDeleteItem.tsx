import { SERVER_URL } from "../util/server"
import axios from "axios"

export default function useDeleteItem() {
    // TODO: Get confirmation before deleting from the db

    // TODO: change this to useQuery

    async function deleteItem(appid: number) {
        try {
            const { data: response } = await axios.get(
                SERVER_URL + "delete/" + appid
            )
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return deleteItem
}
