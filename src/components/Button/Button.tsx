import React from 'react';


type ButtonType = {
	name?: string
	onClick: () => void
	className?: string
}

export const Button: React.FC<ButtonType> = ({ name, onClick, className }) => {

	const onClickButtonHandler = () => onClick();

	return (
		<>
			<button className={className} onClick={onClickButtonHandler}>{name}</button>
		</>
	);
};