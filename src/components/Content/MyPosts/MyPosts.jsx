import cl from './MyPosts.module.css'
import Post from "./Posts/Post";
import React from 'react';
import {addPost, updatePostText} from "../../../redux/state";

const MyPosts = (props) => {
     let newPost = React.createRef();
     let addPost = ()=>{
         props.addPost();
         newPost.current.value = '';
     }
     let onPostChange = ()=>{
        let text = newPost.current.value;
        props.updatePostText(text);
     }
     let posts = props.posts.map(p => <Post likes={p.likes} text={p.text}/>)
    return (
        <div className={cl.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPost}  value={props.newPostText} onChange={onPostChange}>
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