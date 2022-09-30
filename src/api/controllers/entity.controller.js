const EntityModel = require("../models/entity.model")
const getToken = require("../utils/getToken")

let token
;(async () => {
  token = await getToken()
})()

const httpCreateNewEntity = async (req, res) => {
  try {
    token += 1
    const entity = { ...req.entity, token: token }
    const newEntity = new EntityModel(entity)

    await newEntity.save()
    res.status(201).json({ success: true, message: "Entity saved successfully.", entity: entity })
  } catch (error) {
    token -= 1
    console.error(error)
    res.status(500).json({ success: false, message: error.message })
  }
}

const httpGetAllEntities = async (req, res) => {
  try {
    const entities = await EntityModel.find({}).sort({ createdAt: 1 })
    res.status(200).json({ success: true, message: "Entities fetched successfully!", entities: entities })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: error.message })
  }
}

module.exports = { httpCreateNewEntity, httpGetAllEntities }
