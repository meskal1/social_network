import React, { useEffect, useState } from 'react';
import s from './Header.module.scss';

type HeaderType = {

}

export const Header: React.FC<HeaderType> = ({ }) => {
	// console.log('render header');
	// const [date, setDate] = useState(new Date());
	// const minutes = date.getMinutes();
	// const hours = date.getHours();
	// let sec = date.getSeconds();
	// const stringTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

	// useEffect(() => {
	// 	setInterval(() => {
	// 		setDate(() => new Date());
	// 	}, 1000)
	// }, [])

	return (
		<>
			<header className={s.header__container}>
				{/* {hours}:{minutes}:{sec} */}
			</header>
		</>
	);
};
