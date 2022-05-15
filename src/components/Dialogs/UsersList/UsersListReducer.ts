import React from 'react';
import { v1 } from 'uuid';

export type UserType = {
	id: string
	name: string
}
export type UsersListType = UserType[]

const initialState = {
	usersList: [
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
};
type InitialStateType = typeof initialState;

type ActionType = ZaglushkaACType;
export const usersListReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case 'ZAGLUSHKA': {

			return state;
		}
		default: return state;
	}
};

type ZaglushkaACType = ReturnType<typeof zaglushkaAC>
export const zaglushkaAC = () => {
	return {
		type: 'ZAGLUSHKA',
	} as const
};