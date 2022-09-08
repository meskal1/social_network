import React from 'react';
import { Posts } from './Posts/Posts';
import { UserInfo } from './UserInfo/UserInfo';
import s from './Profile.module.scss';

export const Profile = React.memo(() => {
	return (
		<>
			<div className={s.profile_container}>
				<UserInfo />
				<Posts />
			</div>
		</>
	);
});
//TODO добавить кнопку скрола вверх к созданию поста
