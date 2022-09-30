require("dotenv").config()
const mongoose = require("mongoose")

const connectToMongoDb = async () => {
  await mongoose.connect(process.env.MONGODB_URL)
}

module.exports = { connectToMongoDb }
