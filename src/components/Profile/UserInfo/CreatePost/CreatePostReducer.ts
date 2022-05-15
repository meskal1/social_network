import React from 'react';
import { v1 } from 'uuid';
import { ON_CHANGE_TEXTAREA_POST_TEXT, ON_CLICK_ADD_POST } from '../../../../redux/ActionsTypeConstant';

export type PostDataType = {
	id: string
	postDate: string
	postText: string
}
export type NewPostTextType = string
export type PostsType = PostDataType[]

const initialState = {
	newPostText: '',
	posts: [
		{ id: v1(), postDate: '26.03.2021 в 20:00', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
		{ id: v1(), postDate: '26.03.2020 в 19:36', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
		{ id: v1(), postDate: '26.03.2019 в 19:33', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },],
};
type InitialStateType = typeof initialState;

type ActionType = OnChangeTextareaACType | OnClickAddPostACType;
export const createPostReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case ON_CHANGE_TEXTAREA_POST_TEXT: {
			return {
				...state,
				newPostText: action.payload.text
			}
		}
		case 'ON_CLICK_ADD_POST': {
			const date = new Date();
			const minutes = date.getMinutes();
			const hours = date.getHours();
			const stringTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
			const stringDate = date.toLocaleDateString();
			if (state.newPostText !== '') {
				return {
					...state,
					posts: [{ id: v1(), postDate: `${stringDate} в ${stringTime}`, postText: action.payload.postText }, ...state.posts],
					newPostText: '',
				}
			};
			return state;
		}
		default: return state;
	}
};

type OnChangeTextareaACType = ReturnType<typeof onChangeTextareaAC>
export const onChangeTextareaAC = (text: string) => {
	return {
		type: ON_CHANGE_TEXTAREA_POST_TEXT,
		payload: { text },
	} as const
};

type OnClickAddPostACType = ReturnType<typeof onClickAddPostAC>
export const onClickAddPostAC = (postText: string) => {
	return {
		type: ON_CLICK_ADD_POST,
		payload: { postText },
	} as const
};