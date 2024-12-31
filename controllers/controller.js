const events = require("events")
const db = require("../db")

const emitter = new events.EventEmitter()
let id = 0

function getAllReviews() {
  return db.query("SELECT * FROM comments")
}

class Controllers {
  async getReviews(req, res) {
    const reviews = await getAllReviews()
    res.json(reviews.rows)
  }

  async setConnect(req, res) {
    res.writeHead(200, {
      Connection: "keep-alive",
      "Content-type": "text/event-stream",
      "Cache-control": "no-cache",
    })

    emitter.on(`newMessage`, async function refreshHandler() {
      const reviews = await getAllReviews()
      res.write(`data: ${JSON.stringify(reviews.rows)}\n`)
      res.write(`id: ${id}\n\n`)

      res.on("close", () => {
        emitter.removeListener("newMessage", refreshHandler)
      })
    })
  }

  async createPost(req, res) {
    const { name, message } = req.body
    const reviews = await getAllReviews()

    if (
      !reviews.rows.find((item) => {
        return item.name === name && item.message === message
      })
    ) {
      const setReviews = await db.query(
        "INSERT INTO comments (name, message) values ($1, $2) RETURNING *",
        [name, message]
      )
      id += 1
      emitter.emit(`newMessage`)
      res.json(setReviews.rows)
    } else {
      res.send("No change")
    }
  }

  async clear(req, res) {
    const reviews = await db.query("TRUNCATE TABLE comments RESTART IDENTITY")
    res.json(reviews.rows)
  }

  async deleteId(req, res) {
    const id = req.params.id
    const user = await db.query("DELETE FROM comments where id = $1", [id])

    res.json(user.rowCount)
  }

  closeSocket(connections) {
    connections--
    if (!connections) {
      emitter.removeAllListeners("newMessage")
    }
  }
}

module.exports = new Controllers()
