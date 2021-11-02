import express from 'express';
import {
    createNotes,
    getNotes,
    updateNote,
    deleteNote,
} from '../controllers/notes.js';

const router = express.Router();

//http://localhost:5000/notes
router.get('/', getNotes);
router.post('/', createNotes);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;