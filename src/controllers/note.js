import { Note } from "../models/note.model.js"
import mongoose from "mongoose"

const createNote = async (req, res) => {

    try {

        const { title, content } = req.body
        if (!title || !content) {
            return res.status(400).json(
                {
                    message: "fields are required"
                }
            )
        }

        const note = new Note(
            {
                title,
                content,
            }
        )

        await note.save()

        return res.status(201).json(
            {
                message: "new note successful created"
            }
        )

    } catch (error) {
        return res.status(500).json(
            {
                message: "Server Error"
            }
        )
    }

}

const getNotes = async (req, res) => {

    try {
        const allNote = await Note.find()

        return res.status(200).json(
            {
                allNote
            }
        )


    } catch (error) {
        return res.status(500).json(
            {
                message: "Server Error"
            }
        )

    }
}

const getOneNotes = async (req, res) => {

    try {

        const id = req.params.id

        if (!id) {
            return res.status(400).json(
                {
                    message: "Please give id to find..."
                }
            )
        }

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json(
                {
                    message: "Invalid Note ID format"
                }
            )
        }


        const note = await Note.findById({ _id: id })
        if (!note) {
            return res.status(404).json(
                {
                    message: "Note not found...."
                }
            )
        }

        return res.status(200).json(
            {
                note
            }
        )

    } catch (error) {
        return res.status(500).json(
            {
                message: "Server Error"
            }
        )

    }
}

const updateNote = async (req, res) => {
    try {
        const id = req.params.id
        const { title, content } = req.body

        if (!id) {
            return res.status(404).json(
                {
                    message: "Note Id required..."
                }
            )
        }

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json(
                {
                    message: "Invalid Note ID format"
                }
            )
        }

        const existedeNote = await Note.findByIdAndUpdate(
            { _id: id },
            { title, content },
            { returnDocument: "after" }

            // {new: true} ----> use but deprecated
        )
        if (!existedeNote) {
            return res.status(404).json(
                {
                    message: "Note not exists..."
                }
            )
        }

        return res.status(200).json(
            {
                message: "Note Updated...",
            }
        )


    } catch (error) {
        console.log(error);

        return res.status(500).json(
            {
                message: "Server Error"
            }
        )
    }
}

const deleteNote = async (req, res) => {

    try {
        const id = req.params.id
        if (!id) {
            return res.status(404).json(
                {
                    message: "Give Note Id for deleting"
                }
            )
        }

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json(
                {
                    message: "Invalid Note ID format"
                }
            )
        }

        const note = await Note.findByIdAndDelete({ _id: id })
        if (!note) {
            return res.status(404).json(
                {
                    message: "There is no note..."
                }
            )
        }

        return res.status(200).json(
            {
                message: "Note delete..."
            }
        )

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                message: "Server Error"
            }
        )
    }
}

export { createNote, getNotes, updateNote, getOneNotes, deleteNote }