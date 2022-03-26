import React from 'react';
import { Posts } from './Posts/Posts';
import s from './Profile.module.scss';
import { UserInfo } from './UserInfo/UserInfo';

type ProfileType = {

}

export const Profile = (props: ProfileType) => {
	return (
		<>
			<div className={s.profile_container}>
				<UserInfo />
				<Posts />
			</div>
		</>
	);
};