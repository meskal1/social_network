import React from 'react';

export type ButtonType = {
	name?: string
	onClick: () => void
	className?: string
}

export const Button: React.FC<ButtonType> = React.memo(({ name, onClick, className }) => {
	console.log('Rendered Button');

	const onClickButtonHandler = () => onClick();

	return (
		<>
			<button className={className} onClick={onClickButtonHandler}>{name}</button>
		</>
	);
});