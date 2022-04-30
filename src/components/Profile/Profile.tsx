import React from 'react';
import { UserProfileType } from '../../redux/State';
import Posts from './Posts/Posts';
import s from './Profile.module.scss';
import UserInfo from './UserInfo/UserInfo';

type ProfileType = {
	data: UserProfileType,
}

const Profile: React.FC<ProfileType> = ({ data, }) => {
	return (
		<>
			<div className={s.profile_container}>
				<UserInfo />
				<Posts postData={data.userPostData} />
			</div>
		</>
	);
};
export default React.memo(Profile);
