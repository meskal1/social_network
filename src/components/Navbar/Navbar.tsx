import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';

type NavbarType = {

}

export const Navbar = (props: NavbarType) => {
	return (
		<>
			<nav className={s.main_sideBar}>
				<ul className={s.sideBar_list}>
					<li className={s.sideBar_item}>
						<NavLink className={s.sideBar_link} to="/profile" activeClassName={s.active_link}>Мой профиль</NavLink></li>
					<li className={s.sideBar_item}>
						<NavLink className={s.sideBar_link} to="/news" activeClassName={s.active_link}>Новости</NavLink></li>
					<li className={s.sideBar_item}>
						<NavLink className={s.sideBar_link} to="/dialogs" activeClassName={s.active_link}>Сообщения</NavLink></li>
					<li className={s.sideBar_item}>
						<NavLink className={s.sideBar_link} to="/music" activeClassName={s.active_link}>Музыка</NavLink></li>
					<li className={s.sideBar_item}>
						<NavLink className={s.sideBar_link} to="/settings" activeClassName={s.active_link}>Настройки</NavLink></li>
					<li className={s.sideBar_item}>
						<NavLink className={s.sideBar_link} to="/sv" activeClassName={s.active_link}>S.V.</NavLink></li>
				</ul>
			</nav>
		</>
	);
};