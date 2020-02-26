import React from 'react';
import s from './Post.module.css'
const Post = ( ) =>{
  return(
    <div className={s.post}>
      <div className={s.post_header}>
        <img src="https://sun1-84.userapi.com/c855416/v855416401/1ca372/wl_fgfKGcuw.jpg?ava=1"/>
        <div className={s.post_header_info}>
        Зеленский Сергей
          <h9>
          26.02.2020 15:45
          </h9>
        </div>
        </div>
      <div className={s.post_body}>
      Текст поста
      </div>
    </div>
  )
}
export default Post;
