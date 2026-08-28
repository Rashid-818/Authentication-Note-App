
import express from "express";

const app = express()
app.use(express.json())

import authRoute from "./routes/authRoute.js";
import noteRouter from "./routes/noteRoute.js";

app.use("/api/v1/users",authRoute)
app.use("/api/v1/notes",noteRouter)


export default app