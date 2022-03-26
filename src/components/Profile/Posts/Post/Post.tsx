import React from 'react';
import s from './Post.module.scss'
type PostType = {
	postDate: string
	postText: string
}

export const Post: React.FC<PostType> = ({ postDate, postText }) => {
	return (
		<>
			<div className={s.old_post}>
				<div className={s.old_post_header}>
					<div className={s.post_picture}>
						<img className={s.post_img} src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album" alt="intro_image" />
					</div>
					<div className={s.post_info_block}>
						<div className={s.post_user_name}>Даниил К.</div>
						<div className={s.post_date}>{postDate}</div>
					</div>
				</div>
				<p className={s.old_post_text}>{postText}</p>
			</div>
		</>
	);
};