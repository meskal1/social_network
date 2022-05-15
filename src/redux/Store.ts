import { combineReducers, createStore } from 'redux';
import { sendMessageBlockReducer } from '../components/Dialogs/SendMessageBlock/SendMessageBlockReducer';
import { usersListReducer } from '../components/Dialogs/UsersList/UsersListReducer';
import { createPostReducer } from '../components/Profile/UserInfo/CreatePost/CreatePostReducer';

const rootReducer = combineReducers({
	postData: createPostReducer,
	usersDialogsList: usersListReducer,
	messages: sendMessageBlockReducer,
});

// Автоматическая типизация state в store (всего приложения)
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);

//@ts-ignore
window.store = store