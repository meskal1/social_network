import React from 'react';
import { v1 } from 'uuid';
import { CHANGE_FOLLOW_STATUS } from '../../redux/ActionsTypeConstant';

export type AllUsersListType = {
	id: string
	followed: boolean
	name: string
	status: string
	location: { country: string, city: string }
}
export type UsersListType = AllUsersListType[]

const initialState = {
	allUsersList: [
		{ id: v1(), followed: false, name: 'Dima Boyarski', status: 'I am looking for a job', location: { country: 'Russia', city: 'Moscow' } },
		{ id: v1(), followed: true, name: 'Vika Rozumovskaya', status: 'I am looking for a job', location: { country: 'Belarus', city: 'Minsk' } },
		{ id: v1(), followed: false, name: 'Sasha Boyarushnik', status: 'I am looking for a job', location: { country: 'Ukraine', city: 'Kiev' } },
		{ id: v1(), followed: false, name: 'Denis Shira', status: 'I am looking for a job', location: { country: 'Belarus', city: 'Minsk' } },
		{ id: v1(), followed: true, name: 'Petya Borich', status: 'I am looking for a job', location: { country: 'Russia', city: 'Moscow' } },
		{ id: v1(), followed: true, name: 'Igor Pekuma', status: 'I am looking for a job', location: { country: 'Russia', city: 'Moscow' } },
		{ id: v1(), followed: false, name: 'Gleb Risham', status: 'I am looking for a job', location: { country: 'Russia', city: 'Moscow' } },
		{ id: v1(), followed: false, name: 'Roma Abdula', status: 'I am looking for a job', location: { country: 'Russia', city: 'Moscow' } },
		{ id: v1(), followed: true, name: 'Daniil Korki', status: 'I am looking for a job', location: { country: 'Russia', city: 'Moscow' } },
		{ id: v1(), followed: false, name: 'Sergei Jorich', status: 'I am looking for a job', location: { country: 'Russia', city: 'Moscow' } },
		{ id: v1(), followed: true, name: 'Roman Panich', status: 'I am looking for a job', location: { country: 'Russia', city: 'Moscow' } },
		{ id: v1(), followed: true, name: 'Daniel Kossi', status: 'I am looking for a job', location: { country: 'Russia', city: 'Moscow' } },
		{ id: v1(), followed: true, name: 'Serega Joravch', status: 'I am looking for a job', location: { country: 'Russia', city: 'Moscow' } },
	] as UsersListType
};
type InitialStateType = typeof initialState;

type ActionType = OnClickFollowButtonACType;
export const findUsersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case CHANGE_FOLLOW_STATUS: {
			return {
				...state,
				allUsersList: state.allUsersList.map(el => el.id === action.payload.userID ? { ...el, followed: action.payload.follow_status } : el)
			}
		}
		default: return state;
	}
};

type OnClickFollowButtonACType = ReturnType<typeof onClickFollowButtonAC>
export const onClickFollowButtonAC = (userID: string, follow_status: boolean) => {
	return {
		type: CHANGE_FOLLOW_STATUS,
		payload: { userID, follow_status },
	} as const
};