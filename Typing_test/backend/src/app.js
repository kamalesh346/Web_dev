import express from "express"
import cors from "cors"
import authRoutes from "./modules/auth/auth.routes.js";
import testRoutes from "./modules/test/test.routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoutes);
app.use('/api/tests', testRoutes);

export default app