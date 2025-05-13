import { Request, Response } from "express"
import express from "express"
const app = express()
const port = 3000
import { appRouter } from "./routes/application.route"
import cors from "cors"

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Ping!" })
    console.log("ping")
})

app.use("/apps", appRouter)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
