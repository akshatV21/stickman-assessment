const { Schema, model } = require("mongoose")

const entitySchema = new Schema(
  {
    name: { type: String, required: true, unique: false },
    number: { type: Number, required: true },
    token: { type: Number, required: true },
  },
  { timestamps: true }
)

const EntityModel = model("entity", entitySchema)

module.exports = EntityModel
