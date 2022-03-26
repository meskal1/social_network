import React from 'react';
import { Post } from './Post/Post';
import s from './Posts.module.scss'
type PostsType = {

}

export const Posts = (props: PostsType) => {
	return (
		<>
			<div className={s.block_user_posts}>
				<div className={s.old_posts}>
					<Post postDate={'26.03.2022'} postText={'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN'} />
				</div>
			</div>
		</>
	);
};