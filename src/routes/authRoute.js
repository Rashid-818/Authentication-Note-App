import { Router } from "express";
import { login, signUp } from "../controllers/authUser.js";

const authRouter = Router()

// Auth User Routes
authRouter.post("/signup", signUp)
authRouter.post("/login", login)






export default authRouter