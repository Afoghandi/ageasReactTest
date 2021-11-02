import mongoose from 'mongoose';
import NoteMessage from '../models/noteMessage.js';

// Fetch all notes
export const getNotes = async(req, res) => {
    try {
        const noteMessages = await NoteMessage.find();

        return res.status(200).json(noteMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

    return res.send('This Works');
};

// Vreate new notes
export const createNotes = async(req, res) => {
    const note = req.body;

    const newNote = new NoteMessage(note);
    try {
        await newNote.save();

        return res.status(201).json(newNote);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};

// Update Notes
export const updateNote = async(req, res) => {
    const { id: _id } = req.params;
    const note = {
        title: req.body.title,
        body: req.body.body,
    };

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No notes with that id');

    const updatedNote = await NoteMessage.findByIdAndUpdate(
        _id, {...note, _id }, {
            new: true,
        }
    );

    return res.json(updatedNote);
};

//Delete Note
export const deleteNote = async(req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send('No notes with that id');

        await NoteMessage.findByIdAndRemove(id);

        return res.json({ message: 'Note has been deleted successfully' });
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};