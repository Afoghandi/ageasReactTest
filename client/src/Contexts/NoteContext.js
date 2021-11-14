import { createContext, useReducer, useState } from 'react';
import NoteReducer from './NoteReducer';
import { getNotes, createNote, updateNote, deletePost } from './NoteAction';

const INITIAL_STATE = {
	notes: [],
};

// create context
export const NoteContext = createContext(INITIAL_STATE);

//provider components
export const NoteContextProvider = (props) => {
	const [state, dispatch] = useReducer(NoteReducer, INITIAL_STATE);
	const [currentId, setCurrentId] = useState(null);
	const [alert, setAlert] = useState(false);
	return (
		<NoteContext.Provider
			value={{
				notes: state.notes,
				getNotes,
				createNote,
				updateNote,
				deletePost,
				dispatch,
				alert,
				setAlert,
				currentId,
				setCurrentId,
			}}
		>
			{' '}
			{props.children}{' '}
		</NoteContext.Provider>
	);
};
