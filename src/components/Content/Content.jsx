import cl from './Content.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = (props)=>{

    return(
            <div className={cl.content}>
                <ProfileInfo />
                <MyPosts posts={props.postsData.posts}/>
                </div>
    )
}
export default Content;