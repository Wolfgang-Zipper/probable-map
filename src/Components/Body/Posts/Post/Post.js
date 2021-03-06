import React from 'react';
import s from './Post.module.css'
const Post = (props) =>{
  return(
    <div className={s.post}>
      <div className={s.post_header}>
        <img className={s.post_header_img} src="https://sun1-84.userapi.com/c855416/v855416401/1ca372/wl_fgfKGcuw.jpg?ava=1"/>
        <div className={s.post_header_info}>
              <div className={s.name_inner}>
              {props.name}
              </div>
                    <div className={s.post_date}>
                    {props.post_date}
                    </div>

        </div>
        </div> <br/>
      <div className={s.post_body}>
      {props.post_text}
      <div className={s.like} >
      <i сlassName="far fa-heart"> {props.like}</i>
      </div>
      </div>
    </div>
  )
}
export default Post;
