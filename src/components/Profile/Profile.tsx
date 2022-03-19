import React from 'react';
import s from './Profile.module.scss';

type ProfileType = {

}
//TODO Зарефакторить Profile разделить на компоненты посты и юзер инфо
export const Profile = (props: ProfileType) => {
	return (
		<>
			<div className={s.block_user_info}>
				<div className={s.content_picture}>
					<img className={s.content_img} src="https://oboi247.ru/img/post/45/0.jpg" alt="intro_image" />
				</div>
				<div className={s.about_user}>
					<div className={s.user_picture}>
						<img className={s.user_img} src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album" alt="just_married" />
					</div>
					<div className={s.user_info}>
						<h3 className={s.user_name}>Даниил К.</h3>
						<p className={s.user_birth}>Родился:</p>
						<p className={s.user_country}>Город:</p>
						<p className={s.user_aducation}>Образование:</p>
						<p className={s.user_site}>Сайт:</p>
					</div>
				</div>
			</div>
			<div className={s.block_create_post}>
				<p className={s.user_posts_title}>Мои посты</p>
				<div className={s.create_new_post}>
					<textarea className={s.textarea_post} placeholder={`Что нового?`}></textarea>
					<button className={s.post_button} onClick={() => console.log(1)}>Опубликовать</button>
				</div>
			</div>
			<div className={s.block_user_posts}>
				<div className={s.old_posts}>
					<div className={s.old_post}>
						<div className={s.post_picture}>
							<img className={s.post_img} src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album" alt="intro_image" />
						</div>
						<p className={s.old_post_text}>Я умный</p>
					</div>
					<div className={s.old_post}>
						<div className={s.post_picture}>
							<img className={s.post_img} src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album" alt="intro_image" />
						</div>
						<p className={s.old_post_text}>Я супер умный</p>
					</div>
					<div className={s.old_post}>
						<div className={s.post_picture}>
							<img className={s.post_img} src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album" alt="intro_image" />
						</div>
						<p className={s.old_post_text}>Я мега умный</p>
					</div>
				</div>
			</div>
		</>
	);
};