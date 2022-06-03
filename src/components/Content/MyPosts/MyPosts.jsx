import cl from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () =>{
    return(
        <div>
            <textarea></textarea>
            <button>Add</button>
            <button>Delete</button>
            <Post likes = '5' text='Whats up!'/>
            <Post likes = '7' text='Who are you?'/>
        </div>
    )
}
export default MyPosts;