const { Router } = require("express")
const { httpGeneratePdf } = require("../controllers/pdf.controller")

const pdfRouter = Router()

pdfRouter.get("/generate/:id", httpGeneratePdf)

module.exports = pdfRouter
