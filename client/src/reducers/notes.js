import { FETCH_ALL, UPDATE, CREATE, DELETE } from '../constants/actionTypes';

/* eslint-disable import/no-anonymous-default-export */
export default (notes = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case UPDATE:
            return notes.map((note) =>
                note._id === action.payload._id ? action.payload : note
            );
        case CREATE:
            return [...notes, action.payload];

        case DELETE:
            return notes.filter((note) => note._id !== action.payload);

        default:
            return notes;
    }
};