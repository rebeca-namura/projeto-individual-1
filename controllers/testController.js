const db = require("../config/db")

const testConnection = async (req, res) => {
  try {
    // Simple query to test connection
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
}

module.exports = {
  testConnection,
}
