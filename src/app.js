
import express from "express";

const app = express()
app.use(express.json())

import authRoute from "./routes/auth.Route.js";

app.use("/auth",authRoute)


export default app