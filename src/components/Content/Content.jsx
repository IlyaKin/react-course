import cl from './Content.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Content = (props)=>{

    return(
            <div className={cl.content}>
                <ProfileInfo />
                <MyPosts posts={props.profilePage.posts} addPost={props.addPost} updatePostText={props.updatePostText}/>
                </div>
    )
}
export default Content;