import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';

const App = () => {
	return (
		<BrowserRouter>
			<div className={s.wrapper}>
				<Header />
				<main className={s.main__container}>
					<Navbar />
					<div className={s.main_content}>
						<Route path="/profile" component={Profile} />
						<Route path="/news" component={Profile} />
						<Route path="/dialogs" component={Dialogs} />
						<Route path="/music" component={Dialogs} />
						<Route path="/settings" component={Dialogs} />
						<Route path="/sv" component={Dialogs} />
					</div>
				</main>
				<footer className={s.footer__container}></footer>
			</div>
		</BrowserRouter>
	);
}
export default App;