const { Router } = require("express")
const entityRouter = require("./routes/entity.router")
const pdfRouter = require("./routes/pdf.router")

const api = Router()

api.use("/entity", entityRouter)
api.use("/pdf", pdfRouter)

module.exports = api
