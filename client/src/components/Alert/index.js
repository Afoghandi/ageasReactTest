import React from 'react';

import Alert from '@mui/material/Alert';

import useStyles from './styles';

const AlertMsg = (props) => {
	const classes = useStyles();

	return props.trigger ? (
		<Alert severity='info' className={classes.alert}>
			Your note has been delete
		</Alert>
	) : (
		''
	);
};

export default AlertMsg;
