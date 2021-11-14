import { FETCH_ALL, UPDATE, CREATE, DELETE } from '../constants/actionTypes';

/* eslint-disable import/no-anonymous-default-export */
const NoteReducer = (state, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
            // return {...state, notes: [action.payload, ...state.notes] };
        case UPDATE:
            return state.notes.map((note) =>
                note._id === action.payload._id ? action.payload : note
            );
        case CREATE:
            return [...state.notes, action.payload];

        case DELETE:
            return state.filter((note) => note._id !== action.payload);

        default:
            return state;
    }
};

export default NoteReducer;