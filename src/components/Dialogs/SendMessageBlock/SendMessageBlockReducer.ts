import React from 'react';
import { v1 } from 'uuid';
import { ON_CHANGE_INPUT_SEND_MESSAGE } from '../../../redux/ActionsTypeConstant';

const initialState = {
	friendMessage: [
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'Привет, ну, что, гулять пойдем сегодня?' },
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'А я бы сходил на море, что скажешь?' },
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'Да ладно, я шутканул, я же бот))' },
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'Я кстати пока не научился понимать, что ты написал. Пока мой батя учиться программировать, я смеренно ожидаю новых данных.' },
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'Демонстрация моих возможностей на данный момент окончена)' },
	],
	myMessage: [
		{ id: v1(), myName: 'Друг_Заглушка', myMessageText: 'ПРЕЗЕНТАЦИЯ МОЕГО СООБЩЕНИЯ, НАПИШИ ЧТО - НИБУДЬ' },
	],
	messagesSheet: [
		{ id: v1(), myName: 'Друг_Заглушка', myMessageText: 'ПРЕЗЕНТАЦИЯ МОЕГО СООБЩЕНИЯ, НАПИШИ ЧТО - НИБУДЬ...' },
		{ id: v1(), friendName: 'Друг_Заглушка', friendMessageText: 'Да ладно, я шутканул, я же бот))' },
	],
};
type InitialStateType = typeof initialState;

type ActionType = OnChangeInputSendMessageACType;
export const sendMessageBlockReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case ON_CHANGE_INPUT_SEND_MESSAGE: {

			return state;
		}
		default: return state;
	}
};

type OnChangeInputSendMessageACType = ReturnType<typeof onChangeInputSendMessageAC>
export const onChangeInputSendMessageAC = () => {
	return {
		type: ON_CHANGE_INPUT_SEND_MESSAGE,
		// payload: { } as const
	};
}