import cl from './MyPosts.module.css'
import Post from "./Posts/Post";
import React from 'react';
import {addPost} from "../../../redux/state";

const MyPosts = (props) => {
     let newPost = React.createRef();
     let addPost = ()=>{
         let text = newPost.current.value;
         newPost.current.value = '';
         props.addPost(text);
     }
     let posts = props.posts.map(p => <Post likes={p.likes} text={p.text}/>)
    return (
        <div className={cl.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPost}>
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