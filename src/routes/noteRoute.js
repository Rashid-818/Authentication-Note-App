import { Router } from 'express';

const noteRouter = Router()


// Protected Routes
import { requireAuth } from '../middlewares/jwt.middle.js'
import { createNote, deleteNote, getNotes, getOneNotes, updateNote } from "../controllers/note.js";


noteRouter.post("/", requireAuth, createNote)
noteRouter.get("/", requireAuth, getNotes)
noteRouter.get("/:id", requireAuth, getOneNotes)
noteRouter.patch("/:id", requireAuth, updateNote)
noteRouter.delete("/:id", requireAuth, deleteNote)


export default  noteRouter