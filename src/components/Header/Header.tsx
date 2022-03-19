import React from 'react';
import s from './Header.module.scss';
type HeaderType = {

}

export const Header = (props: HeaderType) => {
	return (
		<>
			<header className={s.header__container}></header>
		</>
	);
};