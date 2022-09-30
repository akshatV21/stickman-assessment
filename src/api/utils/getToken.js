const EntityModel = require("../models/entity.model")

const getToken = async () => {
  const lastEntity = await EntityModel.findOne().sort({ createdAt: -1 })
  return lastEntity ? lastEntity.token + 1 : 10001
}

module.exports = getToken
