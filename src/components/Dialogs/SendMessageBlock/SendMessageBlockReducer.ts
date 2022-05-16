import React from 'react';
import { v1 } from 'uuid';
import { ON_CHANGE_TEXTAREA_SEND_MESSAGE, ON_CLICK_TEXTAREA_SEND_MESSAGE } from '../../../redux/ActionsTypeConstant';

export type FriendMessageType = {
	id: string
	friendName: string
	friendMessageText: string
}
export type MyMessageType = {
	id: string
	myName: string
	myMessageText: string
}
export type NewMessageTextType = string

const initialState = {
	newMessageText: '',
	friendMessage: [
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'Привет, ну что, гулять пойдем сегодня?' },
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'А я бы сходил на море, что скажешь?' },
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'Да ладно, я шутканул, я же бот))' },
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'Я кстати пока не научился понимать, что ты написал. Пока мой батя учиться программировать, я смеренно ожидаю новых данных.' },
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'Демонстрация моих возможностей на данный момент окончена)' },
	],
	myMessage: [
		{ id: v1(), myName: 'Заглушка', myMessageText: 'ПРЕЗЕНТАЦИЯ МОЕГО СООБЩЕНИЯ, НАПИШИ ЧТО - НИБУДЬ' },
	],
	messagesSheet: [
		{ id: v1(), myName: 'Заглушка', myMessageText: 'ПРЕЗЕНТАЦИЯ МОЕГО СООБЩЕНИЯ, НАПИШИ ЧТО - НИБУДЬ...' },
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: '' },
	],
};
type InitialStateType = typeof initialState;

type ActionType = OnChangeTextareaSendMessageACType | OnClickSendMessageButtonACType;
export const sendMessageBlockReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case ON_CHANGE_TEXTAREA_SEND_MESSAGE: {
			return {
				...state,
				newMessageText: action.payload.newMessage
			}
		};
		case ON_CLICK_TEXTAREA_SEND_MESSAGE: {
			if (action.payload.newMessage !== '') {
				return {
					...state,
					messagesSheet: [...state.messagesSheet, { id: v1(), myName: 'Заглушка', myMessageText: `${action.payload.newMessage}` }],
					newMessageText: '',
				}
			} else return {
				...state,
				newMessageText: '',
			}
		}
		default: return state;
	}
};

type OnChangeTextareaSendMessageACType = ReturnType<typeof onChangeTextareaSendMessageAC>
export const onChangeTextareaSendMessageAC = (newMessage: string) => {
	return {
		type: ON_CHANGE_TEXTAREA_SEND_MESSAGE,
		payload: { newMessage } as const
	};
}

type OnClickSendMessageButtonACType = ReturnType<typeof onClickSendMessageButtonAC>
export const onClickSendMessageButtonAC = (newMessage: string) => {
	return {
		type: ON_CLICK_TEXTAREA_SEND_MESSAGE,
		payload: { newMessage } as const
	};
}
