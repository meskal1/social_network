import { v1 } from "uuid";
import { PostDataType } from "../components/Profile/UserInfo/CreatePost/CreatePostReducer";

// export type PostDataType = {
// 	id: string,
// 	postDate: string,
// 	postText: string,
// }
// export type UsersDialogsNamesType = {
// 	id: string,
// 	name: string,
// }
// export type UsersDialogsType = {
// 	usersDialogs: UsersDialogsNamesType[],
// }
// export type UserProfileType = {
// 	newPostText: string,
// 	userPostData: PostDataType[],
// }
// export type RootStateType = {
// 	dataForDialogsComponent: UsersDialogsType,
// 	dataForProfileComponent: UserProfileType,
// }

// const state: RootStateType = {
// 	dataForDialogsComponent: {
// 		usersDialogs: [
// 			{ id: v1(), name: 'Dima Boyarski' },
// 			{ id: v1(), name: 'Vika Rozumovskaya' },
// 			{ id: v1(), name: 'Sasha Boyarushnik' },
// 			{ id: v1(), name: 'Denis Shira' },
// 			{ id: v1(), name: 'Petya Borich' },
// 			{ id: v1(), name: 'Igor Pekuma' },
// 			{ id: v1(), name: 'Gleb Risham' },
// 			{ id: v1(), name: 'Roma Abdula' },
// 			{ id: v1(), name: 'Daniil Korki' },
// 			{ id: v1(), name: 'Sergei Jorich' },
// 			{ id: v1(), name: 'Roman Panich' },
// 			{ id: v1(), name: 'Daniel Kossi' },
// 			{ id: v1(), name: 'Serega Joravch' },
// 		],
// 	},
// 	dataForProfileComponent: {
// 		newPostText: '',
// 		userPostData: [
// 			{ id: v1(), postDate: '26.03.2022', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
// 			{ id: v1(), postDate: '26.03.2022', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
// 			{ id: v1(), postDate: '26.03.2022', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
// 		],
// 	},
// }

// let rerenderEtireTree = (state: RootStateType) => { };
// export const subscribe = (observer: () => void) => {
// 	rerenderEtireTree = observer;
// };

// export const addPost = () => {
// 	if (state.dataForProfileComponent.newPostText !== '') {
// 		const date = new Date();
// 		const minutes = date.getMinutes();
// 		const hours = date.getHours();
// 		const stringTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
// 		const stringDate = date.toLocaleDateString();
// 		const newPost: PostDataType = {
// 			id: v1(),
// 			postDate: `${stringDate} в ${stringTime}`,
// 			postText: state.dataForProfileComponent.newPostText,
// 		};
// 		state.dataForProfileComponent.userPostData.push(newPost);
// 		state.dataForProfileComponent.newPostText = '';
// 		rerenderEtireTree(state);
// 	}
// }

// export const onChangeNewPostTextarea = (newPostText: string) => {
// 	state.dataForProfileComponent.newPostText = newPostText;
// 	rerenderEtireTree(state);
// };

// const store = {
// 	_state: {
// 		dataForDialogsComponent: {
// 			usersDialogs: [
// 				{ id: v1(), name: 'Dima Boyarski' },
// 				{ id: v1(), name: 'Vika Rozumovskaya' },
// 				{ id: v1(), name: 'Sasha Boyarushnik' },
// 				{ id: v1(), name: 'Denis Shira' },
// 				{ id: v1(), name: 'Petya Borich' },
// 				{ id: v1(), name: 'Igor Pekuma' },
// 				{ id: v1(), name: 'Gleb Risham' },
// 				{ id: v1(), name: 'Roma Abdula' },
// 				{ id: v1(), name: 'Daniil Korki' },
// 				{ id: v1(), name: 'Sergei Jorich' },
// 				{ id: v1(), name: 'Roman Panich' },
// 				{ id: v1(), name: 'Daniel Kossi' },
// 				{ id: v1(), name: 'Serega Joravch' },
// 			],
// 		},
// 		dataForProfileComponent: {
// 			newPostText: '',
// 			userPostData: [
// 				{ id: v1(), postDate: '26.03.2022', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
// 				{ id: v1(), postDate: '26.03.2022', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
// 				{ id: v1(), postDate: '26.03.2022', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
// 			],
// 		},
// 	},
// 	_callSubscriber(state: RootStateType) { },
// 	getState() {
// 		return this._state
// 	},
// 	subscribe(observer: () => void) {
// 		this._callSubscriber = observer;
// 	},
	// addPost() {
	// 	if (this._state.dataForProfileComponent.newPostText !== '') {
	// 		const date = new Date();
	// 		const minutes = date.getMinutes();
	// 		const hours = date.getHours();
	// 		const stringTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
	// 		const stringDate = date.toLocaleDateString();
	// 		const newPost: PostDataType = {
	// 			id: v1(),
	// 			postDate: `${stringDate} в ${stringTime}`,
	// 			postText: this._state.dataForProfileComponent.newPostText,
	// 		};
	// 		this._state.dataForProfileComponent.userPostData.push(newPost);
	// 		this._state.dataForProfileComponent.newPostText = '';
	// 		this._callSubscriber(this._state);
	// 	}
	// },
	// onChangeNewPostTextarea(newPostText: string) {
	// 	this._state.dataForProfileComponent.newPostText = newPostText;
	// 	this._callSubscriber(this._state);
	// },
// }
// export default store;
// export default state;