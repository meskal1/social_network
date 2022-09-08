import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './UserItem.module.scss';

type UserItemType = {
	userName: string,
	userAvatarLink: number,
	id: string,
}

export const UserItem: React.FC<UserItemType> = ({ userName, userAvatarLink, id, }) => {

	const logo = `https://oboi247.ru/img/post/45/${userAvatarLink}.jpg`;
	const link = '/dialogs/' + userName.toLowerCase().replace(` `, `_`) + `/` + id;

	return (
		<>
			<li className={s.dialog_item}>
				<NavLink
					className={s.dialog_user_name}
					to={link}
					activeClassName={s.active_dialog}>
					<div className={s.friend_picture}>
						<img
							className={s.friend_img}
							src={logo}
							alt="friend_logo" />
					</div>
					<p className={s.user_name}>{userName}</p>
				</NavLink>
			</li>
		</>
	);
};
