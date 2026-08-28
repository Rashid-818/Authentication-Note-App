import { Router } from 'express';

const noteRouter = Router()


// Protected Routes
import { requireAuth } from '../middlewares/jwt.middle.js'
import { createNote, deleteNote, getNotes, getOneNotes, updateNote } from "../controllers/note.js";


noteRouter.post("/note", requireAuth, createNote)
noteRouter.get("/note", requireAuth, getNotes)
noteRouter.get("/note/:id", requireAuth, getOneNotes)
noteRouter.patch("/note/update/:id", requireAuth, updateNote)
noteRouter.delete("/note/:id", requireAuth, deleteNote)


export default  noteRouter