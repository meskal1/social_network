import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.scss'
type PostDataType = {
	postDate: string,
	postText: string,
}
type PostsType = {
	postData: PostDataType[],
}

const Posts: React.FC<PostsType> = ({ postData, }) => {

	const publishedPosts = postData.map((el, i) => {
		return <Post
			postDate={el.postDate}
			postText={el.postText}
			key={i + 1} />
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
};
export default React.memo(Posts);