import React, { ChangeEvent, KeyboardEvent, SyntheticEvent, useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../../redux/Store';
import { Button } from '../../Button/Button';
import s from './SendMessageBlock.module.scss'
import { NewMessageTextType, onChangeTextareaSendMessageAC, onClickSendMessageButtonAC } from './SendMessageBlockReducer';

export const SendMessageBlock = React.memo(() => {
	console.log('Render SendMessageBlock');

	const dispatch = useDispatch();
	const newMessageText = useSelector<AppRootStateType, NewMessageTextType>(state => state.messages.newMessageText);
	const labelPlaceholder = newMessageText.length === 0 ? s.textarea_placeholder : s.textarea_placeholder_mod;
	const [labelTransition, setLabelTransition] = useState({ transition: "all linear 0.2s" })

	const messageAreaRef = useRef<any>();
	const autoResizeTextarea = (e: SyntheticEvent) => {
		const target = e.currentTarget as HTMLTextAreaElement;
		messageAreaRef.current.style.height = "47px";
		messageAreaRef.current.style.height = `${target.scrollHeight + 26}px`;
	};

	const onClickSendMessageButton = useCallback(() => {
		messageAreaRef.current.style.height = "47px";
		setLabelTransition({ transition: "none" });
		const action = onClickSendMessageButtonAC(newMessageText.trim());
		dispatch(action);
	}, [newMessageText.trim().length]);

	const onChangeTextareaMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		autoResizeTextarea(e);
		setLabelTransition({ transition: "all linear 0.2s" })
		const action = onChangeTextareaSendMessageAC(e.currentTarget.value);
		dispatch(action);
	};

	const onKeyDownTextareaMessageHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		autoResizeTextarea(e);
		if (!e.shiftKey && e.key === "Enter") {
			e.preventDefault();
			onClickSendMessageButton();
		}
	};

	return (
		<>
			<div className={s.block_send_message}>
				<label
					className={labelPlaceholder}
					style={labelTransition}
					htmlFor="textarea_message">Написать сообщение...</label>
				<textarea
					id='textarea_message'
					ref={messageAreaRef}
					className={s.textarea_message}
					value={newMessageText}
					onChange={onChangeTextareaMessageHandler}
					onKeyDown={onKeyDownTextareaMessageHandler} />
				<Button className={s.send_message_button} onClick={onClickSendMessageButton} />
			</div>
		</>
	);
});

// const messageAreaRef = useRef<any>();
// ref={messageAreaRef}
// const target = e.currentTarget as HTMLTextAreaElement;
// messageAreaRef.current.style.height = "50px";
// messageAreaRef.current.style.height = `${target.scrollHeight + 14}px`;
