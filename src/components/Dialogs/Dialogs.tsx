import s from './Dialogs.module.scss'
import React, { ChangeEvent, useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { v1 } from 'uuid';

type UserDialogItemType = {
	userName: string
	userLogo: number
	id: string
}
const UserDialogItem: React.FC<UserDialogItemType> = ({ userName, userLogo, id }) => {

	const logo = "https://oboi247.ru/img/post/45/" + userLogo + ".jpg"
	const link = "/dialogs/" + userName.toLowerCase().replace(' ', "_") + '/' + id;

	return (
		<>
			<li className={s.dialog_item}>
				<NavLink className={s.dialog_user_name} to={link} activeClassName={s.active_dialog}>
					<div className={s.friend_picture}>
						<img className={s.friend_img} src={logo} alt="friend_logo" />
					</div>
					<p className={s.user_name}>{userName}</p>
				</NavLink>
			</li>
		</>
	);
};
type FriendMessageType = {
	message: string
	userLogo: number
}
const FriendMessage: React.FC<FriendMessageType> = ({ message, userLogo }) => {

	const logo = "https://oboi247.ru/img/post/45/" + userLogo + ".jpg"

	return (
		<>
			<li className={s.friend_item_message}>
				<div className={s.friend_picture}>
					<img className={s.friend_img} src={logo} alt="friend_logo" />
				</div>
				<p className={s.friend_message}>{message}</p>
			</li>
		</>
	);
};
type MyMessageType = {
	message: string
}
const MyMessage: React.FC<MyMessageType> = ({ message }) => {
	return (
		<>
			<li className={s.my_item_message}>
				<p className={s.my_message}>{message}</p>
				<div className={s.my_picture}>
					<img className={s.my_img} src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album" alt="my_logo" />
				</div>
			</li>
		</>
	);
};
type DialogsType = {

}
export const Dialogs = (props: DialogsType) => {
	let dialogsData = [
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
	]
	const dialogUsers = dialogsData.map((a, i) => {
		return (
			<UserDialogItem userName={a.name} userLogo={i} id={a.id} key={a.id} />
		)
	})
	//TODO Зарефакторить Messages
	// TODO Доделать или переделать инпут и плейсхолдер, что бы при наборе текста плайсхолдер пропадал
	//TODO Доделать скрол, он должен пропадать через 2 секунды после замирания движения мышки в поле фокуса и если поле вне фокуса, должен список начинаться снизу а не сверху
	return (
		<div className={s.dialogs_container}>
			<ul className={s.dialog_user_list}>
				{dialogUsers}
			</ul>
			<div className={s.dialog_current_user}>
				<ul className={s.current_dialog_list}>
					<FriendMessage message="Барабулька?" userLogo={10} />
					<MyMessage message="го" />
					<MyMessage message="Крутяк" />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
					<FriendMessage message="Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf" userLogo={10} />
				</ul>
				<div className={s.block_send_message}>
					<span className={s.input_message} role="textbox" contentEditable ></span>
					<button className={s.send_message}></button>
				</div>
			</div>
		</div>
	);
};