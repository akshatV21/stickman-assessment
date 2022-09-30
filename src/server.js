const app = require("./app")
const { connectToMongoDb } = require("./mongo")

const PORT = process.env.PORT || 8080

const startServer = async () => {
  await connectToMongoDb()
  app.listen(PORT, () => {
    console.log(`Listening to requests on port: ${PORT}`)
  })
}

startServer()
