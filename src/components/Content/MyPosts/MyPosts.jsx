import cl from './MyPosts.module.css'
import Post from "./Posts/Post";
import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {
     let addPost = ()=>{
         props.dispatch(addPostActionCreator());
     }
     let onPostChange = (e)=>{
         let text = e.target.value;
         props.dispatch(updatePostTextActionCreator(text));
     }
     let posts = props.posts.map(p => <Post likes={p.likes} text={p.text}/>)
    return (
        <div className={cl.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea  value={props.newPostText} onChange={onPostChange}>
            </textarea>
            </div>
            <div>
                <button onClick={addPost}>Add</button>
            </div>
            <div className={cl.posts}>
                {posts}
            </div>
        </div>
    )
}
export default MyPosts;