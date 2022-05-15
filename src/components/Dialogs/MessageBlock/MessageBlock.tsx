import React, { useEffect, useRef } from 'react';
import { FriendMessage } from './FriendMessage/FriendMessage';
import { MyMessage } from './MyMessage/MyMessage';
import s from './MessageBlock.module.scss'
import { useSelector } from 'react-redux';
import { AppRootStateType, store } from '../../../redux/Store';

const messagesArray = store.getState().messages.messagesSheet
type MessagesSheetType = typeof messagesArray

export const MessageBlock = React.memo(() => {
	console.log('Render MessageBlock');

	//TODO Зарефакторить Messages
	//TODO Доделать скрол, он должен пропадать через 2 секунды после замирания движения мышки в поле фокуса и если поле вне фокуса

	const messagesSheet = useSelector<AppRootStateType, MessagesSheetType>(state => state.messages.messagesSheet);
	const messages = messagesSheet.map(el => {
		if (el.myName) return <MyMessage key={el.id} message={el.myMessageText} />
		else return <FriendMessage key={el.id} message={el.friendMessageText || ''} userLogo={10} />
	})

	// Прибитие диалога с пользователем к низу
	const messageRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	useEffect(() => {
		if (messageRef.current) messageRef.current.scrollIntoView({ inline: 'end' });
	});

	return (
		<>
			<ul className={s.current_dialog_list}>
				{messages}
				<div ref={messageRef} />
			</ul>
		</>
	);
});