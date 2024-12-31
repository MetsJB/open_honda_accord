const express = require("express")
const cors = require("cors")
const router = require("./routes/route")
const controllers = require("./controllers/controller.js")

const PORT = process.env.PORT || 4000
let connections = process.env.CONNECTIONS || 0
const app = new express()

app.use(cors())
app.use(express.json())

app.use("/api", router)

const server = app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT}`)
})

server.on("connection", (socket) => {
  connections++
  socket.on("close", () => controllers.closeSocket(connections))
})
