import React from 'react';
import { Route } from 'react-router-dom';
import s from './App.module.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { v1 } from 'uuid';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { SV } from './components/SV/SV';
import { RootStateType } from './redux/State'

type AppType = {
	state: RootStateType,
}

//TODO Добавить 3-6 ть друзей в Navbar и (самые часто общительные или онлайн друзья)
const App: React.FC<AppType> = ({ state, }) => {

	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<Header />
				<main className={s.main__container}>
					<Navbar />
					<div className={s.main_content}>
						<Route path="/profile" render={() => <Profile data={state.dataForProfileComponent} />} />
						<Route path="/news" render={() => <News />} />
						<Route exact path="/dialogs" render={() => <Dialogs data={state.dataForDialogsComponent} />} />
						<Route path="/music" render={() => <Music />} />
						<Route path="/settings" render={() => <Settings />} />
						<Route path="/sv" render={() => <SV />} />
					</div>
				</main>
				<footer className={s.footer__container} ></footer >
			</div>
		</div>
	);
}
export default App;