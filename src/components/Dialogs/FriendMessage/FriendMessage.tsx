import s from './FriendMessage.module.scss';
import React from 'react';

type FriendMessageType = {
	message: string;
	userLogo: number;
};
export const FriendMessage: React.FC<FriendMessageType> = ({ message, userLogo }) => {
	const logo = 'https://oboi247.ru/img/post/45/' + userLogo + '.jpg';

	return (
		<>
			<li className={s.friend_item_message}>
				<div className={s.friend_picture}>
					<img
						className={s.friend_img}
						src={logo}
						alt="friend_logo" />
				</div>
				<p className={s.friend_message}>{message}</p>
			</li>
		</>
	);
};
