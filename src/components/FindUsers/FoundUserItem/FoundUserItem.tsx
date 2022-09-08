import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../Button/Button';
import s from './FoundUserItem.module.scss'

type FoundUserItemType = {
	followed: boolean
	name: string
	status: string
	country: string
	city: string
	avatar: string
	userID: string
	onClickButtonFollow: (userID: string, followed: boolean) => void
}

export const FoundUserItem: React.FC<FoundUserItemType> = ({
	followed, name, status, country, city, avatar, userID, onClickButtonFollow
}) => {

	const [style, setStyle] = useState(s.follow_button)
	const userProfileLink = '/users/' + name.toLowerCase().replace(` `, `_`) + `/` + userID;

	const onClickFollowButton = () => {
		if (style === s.follow_button) {
			onClickButtonFollow(userID, !followed)
			setStyle(`${s.follow_button} ${s.animate}`)
			setTimeout(() => {
				setStyle(s.follow_button)
			}, 750);
		}
	}

	return (
		<>
			<li className={s.user_item}>
				<div className={s.follow_block}>
					<NavLink className={s.user_picture} to={userProfileLink}>
						<img className={s.user_img} src={avatar} alt="user_avatar" />
					</NavLink>
					<Button className={style} name={followed ? 'Unfollow' : 'Follow'} onClick={onClickFollowButton} />
				</div>
				<NavLink to={userProfileLink} className={s.user_info_block}>
					<div className={s.user_header_block}>
						<div className={s.user_name}>{name}</div>
						<div className={s.user_residence}>
							<span className={s.residence_country}>{country},</span>
							<span className={s.residence_capitalCity}>{city}</span>
						</div>
					</div>
					<div className={s.user_status}>{status}</div>
				</NavLink>
			</li>
		</>
	);
};