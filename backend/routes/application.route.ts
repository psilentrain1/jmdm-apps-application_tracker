import { Request, Response, NextFunction } from "express"
const express = require("express")
const router = express.Router()
const applications = require("../services/applications")

// READ
router.get("/", function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json(applications.getApplications())
    } catch (err) {
        console.error("Error while getting applications ", err.message)
        next(err)
    }
})

router.get(
    "/entry/:id",
    function (req: Request, res: Response, next: NextFunction) {
        try {
            res.json(applications.getEntry(req.params.id))
        } catch (err) {
            console.error("Error while getting entry ", err.message)
            next(err)
        }
    }
)

router.get(
    "/filter/:sortcol/:sortdir/:filtercol/:filterdata",
    function (req: Request, res: Response, next: NextFunction) {
        try {
            res.json(applications.filterApplications(req.params))
        } catch (err) {
            console.error("Error while getting applications ", err.message)
            next(err)
        }
    }
)

router.post("/aag", function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json(applications.getAAG(req.body))
    } catch (err) {
        console.error("Error while getting data ", err.message)
        next(err)
    }
})

// CREATE/UPDATE
router.post(
    "/update/:id",
    function (req: Request, res: Response, next: NextFunction) {
        if (req.params.id == "new") {
            try {
                res.json(applications.newEntry(req.body))
            } catch (err) {
                console.error("Error while adding entry ", err.message)
                next(err)
            }
        } else {
            try {
                res.json(applications.editEntry(req.body))
            } catch (err) {
                console.error("Error while editing entry ", err.message)
                next(err)
            }
        }
    }
)

// DELETE
router.get(
    "/delete/:id",
    function (req: Request, res: Response, next: NextFunction) {
        try {
            res.json(applications.delEntry(req.params.id))
        } catch (err) {
            console.error("Error while deleting entry ", err.message)
            next(err)
        }
    }
)

module.exports = router
