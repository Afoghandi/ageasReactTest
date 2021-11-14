import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { NoteContextProvider } from './Contexts/NoteContext';

ReactDOM.render(
	<NoteContextProvider>
		<App />,
	</NoteContextProvider>,
	document.getElementById('root')
);
