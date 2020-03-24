import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post.js'


const Posts = (props) => {

  // функц. компонент posts преобразовывает массив из props в компонент с атрибутами посредством метода map();
  let posts = props.postDate.map(post => <Post id={post.id} name={post.name} post_date={post.post_date}
    post_text={post.post_text} like={post.like}/>);

    let NewPostElement = React.createRef();
    let addPostcreate = () => {

      props.addPost();// в этот момент текст из поля по ссылке NewPostElement попадает в функцию changeText находящуюся в state.js

    };

    let onChangePostcreate = () => {
      let text = NewPostElement.current.value;//значение в input
      props.onChangePost(text);// в этот момент текст из поля по ссылке NewPostElement попадает в функцию changeText находящуюся в state.js

    };

    return (
      <div className={s.bod}>
      <div сlassName={s.create_post}>
      <div className="input-group mb-1">
      <input ref={NewPostElement} onChange={onChangePostcreate} value={props.newPostText} type="text" className={s.formcontrol} />

      <div className="input-group-append">
      <button onClick={addPostcreate} className={s.btn_outline_secondary} type="button"
      id="button-addon2">Button
      </button>
      </div>
      </div>
      </div>
      <div сlassName={s.create_posts}>
      {posts}
      </div>
      </div>
    )
  };
  export default Posts;
