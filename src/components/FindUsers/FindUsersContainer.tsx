import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../../redux/Store';
import { FindUsers } from './FindUsers';
import { onClickFollowButtonAC, UsersListType } from './FindUsersReducer';

type MapStateToPropsType = {
	allUsersList: UsersListType
}

type MapDispatchToPropsType = {
	onClickFollowButton: (userID: string, followed: boolean) => void
}

export type FindUsersType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
	return {
		allUsersList: state.foundUsersList.allUsersList,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		onClickFollowButton: (userID: string, followed: boolean) => {
			dispatch(onClickFollowButtonAC(userID, followed))
		},
	}
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);