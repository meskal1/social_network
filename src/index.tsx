import React from 'react';
import ReactDOM from 'react-dom';
import { v1 } from 'uuid';
import App from './App';
import './index.css';

let dialogUserNames = [
	{ id: v1(), name: 'Dima Boyarski' },
	{ id: v1(), name: 'Vika Rozumovskaya' },
	{ id: v1(), name: 'Sasha Boyarushnik' },
	{ id: v1(), name: 'Denis Shira' },
	{ id: v1(), name: 'Petya Borich' },
	{ id: v1(), name: 'Igor Pekuma' },
	{ id: v1(), name: 'Gleb Risham' },
	{ id: v1(), name: 'Roma Abdula' },
	{ id: v1(), name: 'Daniil Korki' },
	{ id: v1(), name: 'Sergei Jorich' },
	{ id: v1(), name: 'Roman Panich' },
	{ id: v1(), name: 'Daniel Kossi' },
	{ id: v1(), name: 'Serega Joravch' },
];

ReactDOM.render(<App dialogUserNames={dialogUserNames} />, document.getElementById('root'));

