import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { v1 } from 'uuid';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { SV } from './components/SV/SV';

type dialogUserNamesType = {
	id: string
	name: string
}
type AppType = {
	dialogUserNames: dialogUserNamesType[]
}
const App: React.FC<AppType> = ({ dialogUserNames }) => {

	return (
		<BrowserRouter>
			<div className={s.wrapper}>
				<Header />
				<main className={s.main__container}>
					<Navbar />
					<div className={s.main_content}>
						<Route path="/profile" component={Profile} />
						<Route path="/news" component={News} />
						<Route exact path="/dialogs" render={() => <Dialogs dialogUserNames={dialogUserNames} />} />
						<Route path="/music" component={Music} />
						<Route path="/settings" component={Settings} />
						<Route path="/sv" component={SV} />
					</div>
				</main>
				<footer className={s.footer__container} ></footer >
			</div>
		</BrowserRouter>
	);
}
export default App;