import cl from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {
    let postsData = [
        {id:'1', likes:'12', text:'Whats up!'},
        {id:'2', likes:'41', text:'Who are you?'}]

    let posts = postsData.map(p => <Post likes={p.likes} text={p.text}/>)
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