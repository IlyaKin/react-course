import cl from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props)=>{

    return(
            <div className={cl.content}>
                <ProfileInfo usersProfile={props.usersProfile}/>
                <MyPostsContainer store={props.store}/>
                </div>
    )
}
export default Profile;