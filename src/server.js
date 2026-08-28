import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./database/db.js";


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