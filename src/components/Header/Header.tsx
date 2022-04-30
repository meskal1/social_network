import React from 'react';
import s from './Header.module.scss';

type HeaderType = {

}

const Header: React.FC<HeaderType> = ({ }) => {
	return (
		<>
			<header className={s.header__container}></header>
		</>
	);
};
export default React.memo(Header);
