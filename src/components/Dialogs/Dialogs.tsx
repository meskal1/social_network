import s from './Dialogs.module.scss';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import UserDialogItem from './UserDialogItem/UserDialogItem';
import { MyMessage } from './MyMessage/MyMessage';
import { FriendMessage } from './FriendMessage/FriendMessage';
import { UsersDialogsType } from '../../redux/State';

type DialogsType = {
	data: UsersDialogsType,
}
const Dialogs: React.FC<DialogsType> = ({ data, }) => {

	const dialogUsers = data.usersDialogs.map((el, i) => {
		return (
			<UserDialogItem
				userName={el.name}
				userAvatarLink={i}
				id={el.id}
				key={el.id} />
		)
	});
	//TODO Зарефакторить Messages
	//TODO Доделать скрол, он должен пропадать через 2 секунды после замирания движения мышки в поле фокуса и если поле вне фокуса, должен список начинаться снизу а не сверху

	let [inputStyleBefore, setInputStyleBefore] = useState(s.input_messageBefore);
	const onChangeInputHandler = (e: FormEvent<HTMLSpanElement>) => {
		setInputStyleBefore(e.currentTarget.textContent ? s.input_message : s.input_messageBefore);
	};

	// Прибитие диалога с пользователем к низу
	const messageRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	useEffect(() => {
		if (messageRef.current) {
			messageRef.current.scrollIntoView({ inline: 'end' });
		}
	});

	return (
		<div className={s.dialogs_container}>
			<ul className={s.dialog_user_list}>
				{dialogUsers}
			</ul>
			<div className={s.dialog_current_user}>
				<ul className={s.current_dialog_list}>
					<FriendMessage message="What if?" userLogo={10} />
					<MyMessage message="го" />
					<MyMessage message="Крутяк" />
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<FriendMessage
						message="Paraparpam poo. Парарам парарам парарам парарам парарам парарам парарам парарам"
						userLogo={10}
					/>
					<div ref={messageRef} />
				</ul>
				<div className={s.block_send_message}>
					<span
						className={inputStyleBefore}
						role="textbox"
						contentEditable
						onInput={onChangeInputHandler} />
					<button className={s.send_message} />
				</div>
			</div>
		</div>
	);
};
export default React.memo(Dialogs);
