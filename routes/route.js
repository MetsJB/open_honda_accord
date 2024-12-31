const express = require("express")
const controllers = require("../controllers/controller.js")

const router = express.Router()

router.post("/post-comment", controllers.createPost)
router.get("/reviews", controllers.getReviews)
router.get("/connect", controllers.setConnect)
router.get("/clear", controllers.clear)
router.get("/clear/:id", controllers.deleteId)

module.exports = router
