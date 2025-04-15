// app.js - Updated with proper session configuration
require("dotenv").config()
const express = require("express")
const path = require("path")
const ejsLayouts = require("express-ejs-layouts")
const port = process.env.PORT || 7000
const dashboardRoutes = require("./src/presentation/routes/dashboardRoutes")
const app = express()


// Set view engine & views path using .env settings
app.set("view engine", process.env.VIEW_ENGINE || "ejs")
app.set("views", path.join(__dirname, process.env.VIEWS_DIR || "src/presentation/views"))

// Set up the layout engine.
app.use(ejsLayouts)
app.set("layout", process.env.LAYOUT || "layouts/main-layout")

// Serve static files from the public directory.
app.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR || "public")))


app.use("/", dashboardRoutes)
// app.use("/", employeeRoutes)

// Start the server.
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})