import cl from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = (props) => {


    let posts = props.posts.map(p => <Post likes={p.likes} text={p.text}/>)
    return (
        <div className={cl.postsBlock}>
            <h3>My Posts</h3>
            <div><textarea>

            </textarea>
            </div>
            <div>
                <button>Add</button>
            </div>
            <div className={cl.posts}>
                {posts}
            </div>
        </div>
    )
}
export default MyPosts;