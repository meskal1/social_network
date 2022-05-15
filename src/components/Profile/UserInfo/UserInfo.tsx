import React from 'react';
import { CreatePost } from './CreatePost/CreatePost';
import s from './UserInfo.module.scss'

export const UserInfo = React.memo(() => {
	return (
		<>
			<div className={s.user_info_container}>
				<div className={s.block_user_info}>
					<div className={s.user_picture}>
						<img className={s.user_img} src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album" alt="just_married" />
					</div>
					<div className={s.user_info}>
						<h3 className={s.user_name}>Даниил К.</h3>
						<p className={s.user_birth}>Родился:</p>
						<p className={s.user_country}>Город:</p>
						<p className={s.user_aducation}>Образование:</p>
						<p className={s.user_site}>Сайт:</p>
					</div>
				</div>
				<CreatePost />
			</div>
		</>
	);
});
