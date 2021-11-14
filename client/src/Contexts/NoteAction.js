import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// API call to fetch all notes
export const getNotes = () => async(dispatch) => {
    try {
        const { data } = await api.fetchNotes();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

// API call to create note
export const createNote = (note) => async(dispatch) => {
    try {
        const { data } = await api.createNote(note);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

// API call to update notes by Id
export const updateNote = (id, note) => async(dispatch) => {
    try {
        const { data } = await api.updateNote(id, note);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

// API call to delete notes by Id
export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};