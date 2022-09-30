const express = require("express")
const cors = require("cors")
const { default: helmet } = require("helmet")
const morgan = require("morgan")
const path = require("path")
const api = require("./api/api")
const EntityModel = require("./api/models/entity.model")

const app = express()

// middlewares
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static("public"))
app.set("view engine", "ejs")

// page routes
app.get("/user", (req, res) => {
  res.render("user.ejs")
})

app.get("/admin", async (req, res) => {
  const entities = await EntityModel.find({}).sort({ createdAt: 1 })
  res.render(path.resolve("./views/admin.ejs"), { entities })
})

app.get("/pdf/:id", async (req, res) => {
  const entity = await EntityModel.findById(req.params.id)
  if (!entity) return res.status(404).json({ success: false, message: "Entity not found" })
  res.render(path.resolve("./views/pdf.ejs"), { entity })
})

// router
app.use("/api", api)

module.exports = app
