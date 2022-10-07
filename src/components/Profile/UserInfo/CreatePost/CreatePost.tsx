import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react'
import { Button } from '../../../Button/Button'
import s from './CreatePost.module.scss'
import { CreatePostType } from './CreatePostContainer'

export const CreatePost: React.FC<CreatePostType> = ({ newPostText, onChangeTextarea, addPost }) => {
  const [labelTransitionStyle, setLabelTransitionStyle] = useState({ transition: 'all linear 0.2s' })
  const labelPlaceholderStyle = newPostText.length === 0 ? s.textarea_placeholder : s.textarea_placeholder_mod

  const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLabelTransitionStyle({ transition: 'all linear 0.2s' })
    onChangeTextarea(e.currentTarget.value)
  }
  const onClickAddPost = useCallback(() => {
    setLabelTransitionStyle({ transition: 'none' })
    addPost(newPostText.trim())
  }, [newPostText.trim().length])

  const onKeyDownInputHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.shiftKey && e.key === 'Enter') {
      e.preventDefault()
      onClickAddPost()
    }
  }
  return (
    <>
      <div className={s.block_create_post}>
        <p className={s.user_posts_title}>Мои посты</p>
        <div className={s.create_new_post}>
          <label className={labelPlaceholderStyle} style={labelTransitionStyle} htmlFor='textarea_post'>
            Что нового?
          </label>
          <textarea
            id='textarea_post'
            className={s.textarea_post}
            value={newPostText}
            onChange={onChangeTextareaHandler}
            onKeyDown={onKeyDownInputHandler}
          />
          <Button className={s.post_button} onClick={onClickAddPost} name={'Опубликовать'} />
        </div>
      </div>
    </>
  )
}
