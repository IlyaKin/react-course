import cl from './Content.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Content = (props)=>{

    return(
            <div className={cl.content}>
                <ProfileInfo />
                <MyPostsContainer store={props.store}/>
                </div>
    )
}
export default Content;