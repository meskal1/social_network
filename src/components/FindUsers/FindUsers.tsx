import React, { useState } from 'react';
import { FoundUserItem } from './FoundUserItem/FoundUserItem';
import s from './FindUsers.module.scss'
import { FindUsersType } from './FindUsersContainer';
import { Button } from '../Button/Button';

//TODO исправить обрезание нижней границы блока со скролом в неразвернутом окне браузера (не на весь экран)

export const FindUsers: React.FC<FindUsersType> = ({ allUsersList, onClickFollowButton }) => {

	const onClickButtonFollow = (userID: string, followed: boolean) => {
		onClickFollowButton(userID, followed)
	};

	const [style, setStyle] = useState(s.show_more_button)
	const [sliceRange, setSliceRange] = useState(4)
	const onClickShowMoreButton = () => {
		if (style === s.show_more_button) {
			setStyle(`${s.show_more_button} ${s.animate_show_more}`)
			setTimeout(() => {
				setStyle(s.show_more_button)
				setSliceRange(sliceRange + 1)
			}, 750);
		}
	};

	const foundUsers = allUsersList.slice(0, sliceRange).map((el, i) => {
		return (
			<FoundUserItem
				followed={el.followed}
				name={el.name}
				status={el.status}
				country={el.location.country}
				city={el.location.city}
				avatar={`https://oboi247.ru/img/post/45/${i}.jpg`}
				userID={el.id}
				onClickButtonFollow={onClickButtonFollow}
				key={el.id} />
		)
	})

	return (
		<>
			<div className={s.users_container}>
				<div className={s.title_users}>
					Пользователи
				</div>
				<div className={s.search_users_block}>
					<ul className={s.all_users_list}>
						{foundUsers}
					</ul>
					<Button className={style} name={'Show more'} onClick={onClickShowMoreButton} />
				</div>
			</div>
		</>
	);
};