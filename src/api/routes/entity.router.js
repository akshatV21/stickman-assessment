const { Router } = require("express")
const { httpCreateNewEntity, httpGetAllEntities } = require("../controllers/entity.controller")
const { validateEntityPostRequest } = require("../middlewares/entity.middlewares")

const entityRouter = Router()

entityRouter.post("/register", validateEntityPostRequest, httpCreateNewEntity)

entityRouter.get("/all", httpGetAllEntities)

module.exports = entityRouter
