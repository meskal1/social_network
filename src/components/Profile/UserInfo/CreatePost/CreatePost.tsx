import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../../../redux/Store';
import { Button } from '../../../Button/Button';
import s from './CreatePost.module.scss'
import { NewPostTextType, onChangeTextareaAC, onClickAddPostAC } from './CreatePostReducer';

export const CreatePost = React.memo(() => {
	console.log('Rendered CreatePost');

	const dispatch = useDispatch();
	const newPostText = useSelector<AppRootStateType, NewPostTextType>(state => state.postData.newPostText);
	const [labelTransition, setLabelTransition] = useState({ transition: "all linear 0.2s" })
	const labelPlaceholder = newPostText.length === 0 ? s.textarea_placeholder : s.textarea_placeholder_mod;

	const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setLabelTransition({ transition: "all linear 0.2s" })
		const action = onChangeTextareaAC(e.currentTarget.value);
		dispatch(action);
	};
	const onClickAddPost = useCallback(() => {
		setLabelTransition({ transition: "none" });
		const action = onClickAddPostAC(newPostText.trim());
		dispatch(action);
	}, [newPostText.trim().length]);

	const onKeyDownInputHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (!e.shiftKey && e.key === "Enter") {
			e.preventDefault();
			onClickAddPost();
		}
	};
	return (
		<>
			<div className={s.block_create_post}>
				<p className={s.user_posts_title}>Мои посты</p>
				<div className={s.create_new_post}>
					<label
						className={labelPlaceholder}
						style={labelTransition}
						htmlFor="textarea_post">Что нового?</label>
					<textarea
						id="textarea_post"
						className={s.textarea_post}
						value={newPostText}
						onChange={onChangeTextareaHandler}
						onKeyDown={onKeyDownInputHandler} />
					<Button className={s.post_button} onClick={onClickAddPost} name={'Опубликовать'} />
				</div>
			</div>
		</>
	);
});