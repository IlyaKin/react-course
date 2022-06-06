import cl from './Content.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = ()=>{
    return(
            <div className={cl.content}>
                <ProfileInfo />
                <MyPosts />
                </div>
    )
}
export default Content;