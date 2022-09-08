import s from './Dialogs.module.scss';
import React from 'react';
import { UsersList } from './UsersList/UsersList';
import { MessageBlock } from './MessageBlock/MessageBlock';
import { SendMessageBlock } from './SendMessageBlock/SendMessageBlock';

export const Dialogs = React.memo(() => {

	return (
		<>
			<div className={s.dialogs_container}>
				<UsersList />
				<div className={s.dialog_current_user}>
					<MessageBlock />
					<SendMessageBlock />
				</div>
			</div>
		</>
	);
});
