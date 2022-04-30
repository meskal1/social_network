import { v1 } from "uuid";

export type PostDataType = {
	id: string,
	postDate: string,
	postText: string,
}
export type UsersDialogsNamesType = {
	id: string,
	name: string,
}
export type UsersDialogsType = {
	usersDialogs: UsersDialogsNamesType[],
}
export type UserProfileType = {
	userPostData: PostDataType[],
}
export type RootStateType = {
	dataForDialogsComponent: UsersDialogsType,
	dataForProfileComponent: UserProfileType,
}

const state: RootStateType = {
	dataForDialogsComponent: {
		usersDialogs: [
			{ id: v1(), name: 'Dima Boyarski' },
			{ id: v1(), name: 'Vika Rozumovskaya' },
			{ id: v1(), name: 'Sasha Boyarushnik' },
			{ id: v1(), name: 'Denis Shira' },
			{ id: v1(), name: 'Petya Borich' },
			{ id: v1(), name: 'Igor Pekuma' },
			{ id: v1(), name: 'Gleb Risham' },
			{ id: v1(), name: 'Roma Abdula' },
			{ id: v1(), name: 'Daniil Korki' },
			{ id: v1(), name: 'Sergei Jorich' },
			{ id: v1(), name: 'Roman Panich' },
			{ id: v1(), name: 'Daniel Kossi' },
			{ id: v1(), name: 'Serega Joravch' },
		],
	},
	dataForProfileComponent: {
		userPostData: [
			{ id: v1(), postDate: '26.03.2022', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
			{ id: v1(), postDate: '26.03.2022', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
			{ id: v1(), postDate: '26.03.2022', postText: 'Магазин приложений с хакерскими утилитами от Offensive Security на Android. 16 июля компания Offensive Security сообщила о создании Kali Net Hunter App Store с бесплатными приложениями, связанными с информационной безопасностью: http://amp.gs/r7pN' },
		],
	},
}
export default state;