import { Request, Response } from "express"
const express = require("express")
const app = express()
const port = 3000
const appRouter = require("./routes/application.route")
const cors = require("cors")

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
