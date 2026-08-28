import dotenv from "dotenv";
import connectDB from "./database/db.js";
import app from "./app.js";


dotenv.config(
    {
        path: "./.env"
    }
)
connectDB()
    .then(app.listen(3000, () => {
        console.log(`Server is running on PORT: ${process.env.PORT}`);

    }))
    .catch((error) => {
        next(error)
    })