import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post.js'

const Posts = (props) => {

    let posts = props.postDate.map(post => <Post id={post.id} name={post.name} post_date={post.post_date}
                                                 post_text={post.post_text} like={post.like}/>);
    let NewPostElement = React.createRef();
    let addPost = () => {
        let text = NewPostElement.current.value;
        props.addnewPost(text); // в этот момент текст из поля по ссылке NewPostElement попадает в функцию addPost

    };
    return (
        <div className={s.bod}>
            <div сlassName={s.create_post}>


                <div className="input-group mb-3">
                    <input ref={NewPostElement} type="text" className="form-control"/>
                    <div className="input-group-append">
                        <button onClick={addPost} className="btn btn-outline-secondary" type="button"
                                id="button-addon2">Button
                        </button>
                    </div>
                </div>
            </div>
            {posts}

        </div>
    )
};
export default Posts;
