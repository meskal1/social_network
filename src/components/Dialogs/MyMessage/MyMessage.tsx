import s from './MyMessage.module.scss';
import React from 'react';

type MyMessageType = {
	message: string;
};
export const MyMessage: React.FC<MyMessageType> = ({ message }) => {
	return (
		<>
			<li className={s.my_item_message}>
				<p className={s.my_message}>{message}</p>
				<div className={s.my_picture}>
					<img
						className={s.my_img}
						src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album"
						alt="my_logo" />
				</div>
			</li>
		</>
	);
};
