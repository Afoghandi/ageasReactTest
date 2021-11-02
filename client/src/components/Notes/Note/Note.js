import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

import { deletePost } from '../../../actions/notes';
import { StateContext } from '../../Contexts/StateContext';

const Note = ({ note }) => {
	// gets states from context
	const { setCurrentId, setAlert } = useContext(StateContext);
	const dispatch = useDispatch();
	const classes = useStyles();

	const { createdAt, _id, title, body, updatedAt } = note;

	// Deletes  notes and alerts action completed
	const handleDelete = () => {
		dispatch(deletePost(_id));

		setAlert(true);
	};
	//Set timer to remove alert
	useEffect(() => {
		setTimeout(() => {
			setAlert(false);
		}, 3000);
	}, [setAlert]);

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} />{' '}
			<div className={classes.overlay}>
				<Typography variant='h6'> Created On: </Typography>{' '}
				<Typography variant='body2'>
					{moment({ createdAt }).format('MMM Do YY')}
				</Typography>{' '}
			</div>{' '}
			<div className={classes.overlay2}>
				<Button style={{ color: 'white' }} size='small'>
					<MoreHorizIcon fontSize='medium' onClick={() => setCurrentId(_id)} />{' '}
				</Button>{' '}
			</div>{' '}
			<div className={classes.title}>
				<Typography variant='h5' gutterBottom>
					Title: {title}{' '}
				</Typography>{' '}
			</div>{' '}
			<CardContent>
				{' '}
				<Typography
					variant='body2'
					color='textSecondary'
					component='p'
					gutterBottom
				>
					{body}{' '}
				</Typography>{' '}
			</CardContent>{' '}
			<CardActions className={classes.cardActions}>
				{' '}
				<Button size='small' color='primary' onClick={() => setCurrentId(_id)}>
					{' '}
					{createdAt === updatedAt
						? 'Update:'
						: `Updated : ${moment(updatedAt).format(' h:mm')}`}{' '}
				</Button>{' '}
				<Button size='small' color='primary' onClick={() => handleDelete()}>
					<DeleteIcon fontSize='small' /> Delete{' '}
				</Button>{' '}
			</CardActions>{' '}
		</Card>
	);
};

export default Note;
