import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { v1 } from 'uuid';

const App = () => {
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
	return (
		<BrowserRouter>
			<div className={s.wrapper}>
				<Header />
				<main className={s.main__container}>
					<Navbar />
					<div className={s.main_content}>
						<Route path="/profile" component={Profile} />
						<Route path="/news" component={Profile} />
						<Route path="/dialogs" ><Dialogs dialogUserNames={dialogUserNames} /></Route>
						<Route path="/music" component={Dialogs} />
						<Route path="/settings" component={Dialogs} />
						<Route path="/sv" component={Dialogs} />
					</div>
				</main>
				<footer className={s.footer__container} ></footer >
			</div>
		</BrowserRouter>
	);
}
export default App;