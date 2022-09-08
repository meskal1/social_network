import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../../../../redux/Store';
import { CreatePost } from './CreatePost';
import { NewPostTextType, onChangeTextareaAC, onClickAddPostAC } from './CreatePostReducer';

type MapStateToPropsType = NewPostTextType

type MapDispatchToPropsType = {
	onChangeTextarea: (onChangeValue: string) => void
	addPost: (addText: string) => void
}
export type CreatePostType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
	return {
		newPostText: state.postData.newPostText,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		onChangeTextarea: (onChangeValue: string) => {
			dispatch(onChangeTextareaAC(onChangeValue))
		},
		addPost: (addText: string) => {
			dispatch(onClickAddPostAC(addText))
		},
	}
}

export const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);