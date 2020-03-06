import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post.js'
const Posts = ( ) =>{
  return(
    <div className={s.bod}>
    <Post post_text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' like='23'/>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>
    <Post like='23'/>

    </div>
  )
}
export default Posts;
