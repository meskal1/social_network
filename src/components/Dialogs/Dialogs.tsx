import s from './Dialogs.module.scss'
import React, { ChangeEvent, useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

type DialogsType = {

}


export const Dialogs = (props: DialogsType) => {

	// TODO Доделать или переделать инпут и плейсхолдер, что бы при наборе текста плайсхолдер пропадал
	//TODO Доделать скрол, он должен пропадать через 2 секунды после замирания движения мышки в поле фокуса и если поле вне фокуса, должен список начинаться снизу а не сверху
	return (
		<BrowserRouter>
			<div className={s.dialogs_container}>
				<ul className={s.dialog_user_list}>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/dima" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/0.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Dima Boyarski</p>
						</NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/vika" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/1.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Vika Rozumovskaya</p>
						</NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/sasha" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/2.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Sasha Boyarushnik</p></NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/denis" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/3.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Denis Shira</p></NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/petya" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/4.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Petya Borich</p></NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/igor" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/5.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Igor Pekuma</p></NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/gleb" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/6.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Gleb Risham</p></NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/roma" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/7.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Roma Abdula</p></NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/daniil" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/8.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Daniil Korki</p></NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/sergei" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/9.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Sergei Jorich</p></NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/roman_panich" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/7.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Roman Panich</p></NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/daniel" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/8.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Daniel Kossi</p></NavLink>
					</li>
					<li className={s.dialog_item}>
						<NavLink className={s.dialog_user_name} to="/dialogs/serega" activeClassName={s.active_dialog}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/9.jpg" alt="friend_logo" />
							</div>
							<p className={s.user_name}>Serega Joravch</p></NavLink>
					</li>
				</ul>
				<div className={s.dialog_current_user}>
					<ul className={s.current_dialog_list}>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Барабулька?</p>
						</li>
						<li className={s.my_item_message}>
							<p className={s.my_message}>го</p>
							<div className={s.my_picture}>
								<img className={s.my_img} src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album" alt="my_logo" />
							</div>
						</li>
						<li className={s.my_item_message}>
							<p className={s.my_message}>Крутяк</p>
							<div className={s.my_picture}>
								<img className={s.my_img} src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album" alt="my_logo" />
							</div>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
						<li className={s.friend_item_message}>
							<div className={s.friend_picture}>
								<img className={s.friend_img} src="https://oboi247.ru/img/post/45/10.jpg" alt="friend_logo" />
							</div>
							<p className={s.friend_message}>Сек. Ща заскачу в магаз, потом позвоню. Денис идет? erferf erfef erf</p>
						</li>
					</ul>
					<div className={s.block_send_message}>
						<span className={s.input_message} role="textbox" contentEditable ></span>
						<button className={s.send_message}></button>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

