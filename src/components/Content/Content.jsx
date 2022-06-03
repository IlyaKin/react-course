import cl from './Content.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Content = ()=>{
    return(
            <div className={cl.content}>
                <img src="https://klike.net/uploads/posts/2019-06/1561526578_1.jpg" alt=""/>
                <MyPosts />
                </div>
    )
}
export default Content;