import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Note from './Note/Note';
import useStyles from './styles';

const Notes = () => {
	const notes = useSelector((state) => state.notes);
	const classes = useStyles();

	return !notes.length ? (
		<CircularProgress />
	) : (
		<Grid
			className={classes.container}
			container
			alignItems='stretch'
			spacing={3}
		>
			{notes.map((note) => (
				<Grid key={note._id} item xs={12} sm={6} md={6}>
					<Note note={note} />
				</Grid>
			))}
		</Grid>
	);
};

export default Notes;
