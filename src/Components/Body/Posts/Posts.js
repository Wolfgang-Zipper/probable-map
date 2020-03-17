import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post.js'

const Posts = (props) => {

    // функц. компонент posts преобразовывает массив из props в компонент с атрибутами посредством метода map();
    let posts = props.postDate.map(post => <Post id={post.id} name={post.name} post_date={post.post_date}
                                                 post_text={post.post_text} like={post.like}/>);
    let NewPostElement = React.createRef();
    let addPost = () => {
        let text = NewPostElement.current.value;
        props.dispatch({type:'addnewPost'}); // в этот момент текст из поля по ссылке NewPostElement попадает в функцию addPost которая находится в условном BLL state.js

    };
    let onChangePost = () => {
      let text = NewPostElement.current.value;//значение в input
      props.dispatch({type:'changePostText', textMessage:text});// в этот момент текст из поля по ссылке NewPostElement попадает в функцию changeText находящуюся в state.js
    };
    return (
        <div className={s.bod}>
            <div сlassName={s.create_post}>
                <div className="input-group mb-1">
                    <input ref={NewPostElement} onChange={onChangePost} value={props.newPostText} type="text" className={s.formcontrol} />

                    <div className="input-group-append">
                        <button onClick={addPost} className={s.btn_outline_secondary} type="button"
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
