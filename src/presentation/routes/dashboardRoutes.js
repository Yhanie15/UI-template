const express = require("express")
const router = express.Router()
const dashboardController = require("../controller/dashboardController")

// Debug middleware to log all requests
router.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
  next()
})

router.get('/', dashboardController.renderDashboard);

module.exports = router