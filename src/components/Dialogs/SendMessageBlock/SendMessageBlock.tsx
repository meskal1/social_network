import React, { FormEvent, useState } from 'react';
import { Button } from '../../Button/Button';
import s from './SendMessageBlock.module.scss'

export const SendMessageBlock = React.memo(() => {
	console.log('Render SendMessageBlock');

	let [inputStyleBefore, setInputStyleBefore] = useState(s.input_messageBefore);
	
	const onChangeInputHandler = (e: FormEvent<HTMLSpanElement>) => {

		setInputStyleBefore(e.currentTarget.textContent ? s.input_message : s.input_messageBefore);
	};
	const onClickSendButton = () => {

	};

	return (
		<>
			<div className={s.block_send_message}>
				<span
					className={inputStyleBefore}
					role="textbox"
					contentEditable
					onInput={onChangeInputHandler} />
				<Button className={s.send_message} onClick={onClickSendButton} />
			</div>
		</>
	);
});