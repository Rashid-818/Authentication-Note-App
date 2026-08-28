import { Router } from "express";
import { login, signUp } from "../controllers/authUser.js";

const router = Router()
router.post("/signup", signUp)
router.post("/login", login)




// Protected Routes
import { requireAuth } from '../middlewares/jwt.middle.js'
import { createNote, deleteNote, getNotes, getOneNotes, updateNote } from "../controllers/note.js";

router.post("/note", requireAuth, createNote)
router.get("/note", requireAuth, getNotes)
router.patch("/note/update/:id", requireAuth, updateNote)
router.get("/note/:id", requireAuth, getOneNotes)
router.delete("/note/:id", requireAuth, deleteNote)

export default router