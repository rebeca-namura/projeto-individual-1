const express = require("express")
const router = express.Router()

// Simple test route that doesn't require database
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "API routes are working!",
    timestamp: new Date().toISOString(),
  })
})

// Database connection test
router.get("/test-connection", async (req, res) => {
  try {
    const db = require("../config/db")
    const result = await db.query("SELECT NOW() as current_time")

    res.json({
      success: true,
      message: "Database connection successful!",
      data: {
        timestamp: result.rows[0].current_time,
        status: "Connected",
      },
    })
  } catch (error) {
    console.error("Database connection error:", error)
    res.status(500).json({
      success: false,
      message: error.message,
      error: "Database connection failed",
    })
  }
})

module.exports = router
