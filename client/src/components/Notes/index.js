import { useContext, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import { NoteContext } from '../../Contexts/NoteContext';
import Note from './Note/Note';
import useStyles from './styles';

const Notes = () => {
	const classes = useStyles();
	const { currentId, notes, dispatch, getNotes } = useContext(NoteContext);

	console.log(getNotes);
	useEffect(() => {
		dispatch(getNotes());
	}, [dispatch, getNotes, currentId]);

	return notes.length ? (
		<CircularProgress />
	) : (
		<Grid
			className={classes.container}
			container
			alignItems='stretch'
			spacing={3}
		>
			{' '}
			{notes.map((note) => (
				<Grid key={note._id} item xs={12} sm={6} md={6}>
					<Note note={note} />
				</Grid>
			))}{' '}
		</Grid>
	);
};

export default Notes;
