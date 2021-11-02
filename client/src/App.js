import React, { useEffect, useState } from 'react';
import { getNotes } from './actions/notes';
import { StateContext } from './components/Contexts/StateContext';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import notes from './images/notes.png';
import { useDispatch } from 'react-redux';
import { Form, AlertMsg, Notes } from './components';
import useStyles from './styles';

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const [alert, setAlert] = useState(false);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(getNotes());
	}, [currentId, dispatch]);
	return (
		<StateContext.Provider value={{ setCurrentId, currentId, setAlert }}>
			<Container maxWidth='lg'>
				<AppBar className={classes.appBar} position='static' color='inherit'>
					<Typography className={classes.heading} variant='h2' align='center'>
						Notes{' '}
					</Typography>
					<img className={classes.image} src={notes} alt='notes' height='60' />
				</AppBar>
				<AlertMsg trigger={alert} />
				<Grow in>
					<Container>
						<Grid
							className={classes.mainContainer}
							container
							justifyContent='space-between'
							alignItems='stretch'
							spacing={3}
						>
							<Grid item xs={12} sm={7}>
								<Notes />{' '}
							</Grid>
							<Grid item xs={12} sm={4}>
								{' '}
								<Form />{' '}
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</StateContext.Provider>
	);
};
export default App;
