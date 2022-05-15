import React from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../redux/Store';
import { PostsType } from '../UserInfo/CreatePost/CreatePostReducer';
import { Post } from './Post/Post';
import s from './Posts.module.scss'

export const Posts = React.memo(() => {
	console.log('Rendered PostsBlock');

	const posts = useSelector<AppRootStateType, PostsType>(state => state.postData.posts);

	const publishedPosts = posts.map((el, i) => {
		return <Post
			key={el.id}
			postDate={el.postDate}
			postText={el.postText} />
	});

	return (
		<>
			<div className={s.block_user_posts}>
				<div className={s.old_posts}>
					{publishedPosts}
				</div>
			</div>
		</>
	);
});