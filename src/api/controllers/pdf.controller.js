const EntityModel = require("../models/entity.model")
const generatePdf = require("../utils/generatePdf")

const httpGeneratePdf = async (req, res) => {
  try {
    const entityId = req.params.id
    const pdf = await generatePdf(entityId)
    res.set({
      "Content-Type": "application/pdf",
      "Content-Length": pdf.length,
      "Content-Disposition": `attachment;filename="${entityId}.pdf"`,
    })
    res.send(pdf)
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: "Error generating Pdf", error: error })
  }
}

module.exports = { httpGeneratePdf }
