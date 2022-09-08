import React from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../redux/Store';
import { UsersListType } from './UsersListReducer';
import { UserItem } from './UserItem/UserItem';
import s from './UsersList.module.scss'

export const UsersList = () => {

	const usersList = useSelector<AppRootStateType, UsersListType>(state => state.usersDialogsList.usersList);

	const blockUsers = usersList.map((el, i) => {
		return (
			<UserItem
				id={el.id}
				key={el.id}
				userName={el.name}
				userAvatarLink={i} />
		)
	});
	return (
		<>
			<ul className={s.dialog_user_list}>
				{blockUsers}
			</ul>
		</>
	);
};