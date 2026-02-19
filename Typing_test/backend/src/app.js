import express from "express"
import cors from "cors"
import {pool} from "./db/pool.js"
import authRoutes from "./modules/auth/routes.js";

const app = express()

app.use(cors())
app.use(express.json())

app.get("/health", (req, res) => {
  res.status(200).json({ status: "Ok", msg: "backend is running" })
})

app.get("/db-test", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS result")
    res.json({
      status: "connected",
      testValue: rows[0].result
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      status: "error",
      message: "Database connection failed"
    })
  }
})

app.use("/api/auth", authRoutes);

export default app