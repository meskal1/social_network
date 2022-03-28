import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { v1 } from 'uuid';
import App from './App';
import './index.css';
import state from './redux/State'

ReactDOM.render(
	<BrowserRouter>
		<App state={state} />
	</BrowserRouter>, document.getElementById('root'));
