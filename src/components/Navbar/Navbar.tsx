import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserItem } from '../Dialogs/UsersList/UserItem/UserItem';
import s from './Navbar.module.scss';

type NavbarType = {

}

export const Navbar: React.FC<NavbarType> = ({ }) => {
	//TODO замапить навлинки, передать их в стейт в виде обьекта ключ значение 
	//TODO создать новую компоненту друзей вместо заглушки, замапить ее и добавить данные в стейт
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
						<NavLink className={s.sideBar_link} to="/users" activeClassName={s.active_link}>Поиск контактов</NavLink></li>
					<li className={s.sideBar_item}>
						<NavLink className={s.sideBar_link} to="/music" activeClassName={s.active_link}>Музыка</NavLink></li>
					<li className={s.sideBar_item}>
						<NavLink className={s.sideBar_link} to="/settings" activeClassName={s.active_link}>Настройки</NavLink></li>
					<li className={s.sideBar_item}>
						<NavLink className={s.sideBar_link} to="/sv" activeClassName={s.active_link}>S.V.</NavLink></li>
				</ul>
				<div style={{ margin: "200px 0 0 0" }}>
					<p>Друзья_Заглушка</p>
					<p>Создать блок друзей</p>
					<UserItem
						userName={"Petya"}
						userAvatarLink={3}
						id={'23'} />
				</div>
			</nav>
		</>
	);
};
