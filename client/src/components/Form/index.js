import React, { useState, useEffect, useContext } from 'react';
import { NoteContext } from '../../Contexts/NoteContext';

import { Typography, Button, TextField, Paper } from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
	const { currentId, setCurrentId, dispatch, createNote, updateNote, notes } =
		useContext(NoteContext);

	const [noteData, setNoteData] = useState({
		title: '',
		body: '',
	});

	//Gathers state from index
	const note = currentId ? notes.find((note) => note._id === currentId) : null;
	const classes = useStyles();

	useEffect(() => {
		if (note) setNoteData(note);
	}, [note]);

	// handles submit, to create and updates notes
	const handleSubmit = (e) => {
		e.preventDefault();

		if (currentId) {
			dispatch(updateNote(currentId, noteData));
		} else {
			dispatch(createNote(noteData));
		}

		clear();
	};
	// reverts form to empty string once submitted or cleared
	const clear = () => {
		setCurrentId(null);
		setNoteData({ title: '', body: '' });
	};
	//Handles form input
	const onChange = (e) => {
		setNoteData({
			...noteData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete='off'
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography variant='h6'>
					{currentId ? 'Edit Notes' : 'Create Notes'}
				</Typography>{' '}
				<TextField
					name='title'
					variant='outlined'
					label='Title'
					fullWidth
					value={noteData.title}
					onChange={(e) => onChange(e)}
				/>{' '}
				<TextField
					name='body'
					variant='outlined'
					label='Body'
					fullWidth
					value={noteData.body}
					onChange={(e) => onChange(e)}
				/>{' '}
				<Button
					className={classes.buttonSubmit}
					variant='contained'
					color='primary'
					size='large'
					type='submit'
					fullWidth
				>
					Submit{' '}
				</Button>
				<Button
					variant='contained'
					color='secondary'
					size='small'
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>{' '}
			</form>{' '}
		</Paper>
	);
};

export default Form;
