import cl from "./ProfileInfo.module.css"
import Preloader from "../../Preloader/Preloader";
import userPhoto from './../../../assets/images/userPhoto.jpg'
const ProfileInfo = (props) => {
    if(!props.usersProfile){
        return <Preloader />
    }

    return (
        <div>
    <div className={cl.description}>
        <img  className={cl.usersPhoto} src={props.usersProfile.photos.large!=null?props.usersProfile.photos.large:userPhoto} alt=""/>
        <div className={cl.profileUserName}>{props.usersProfile.fullName}</div>
        <div className={cl.aboutBlock}>{props.usersProfile.aboutMe}</div>
        <div className={cl.jobBlock}>{props.usersProfile.lookingForAJob?<p>Я ищу работу</p>:<p>{props.usersProfile.lookingForAJobDescription}</p>}</div>
        <div className={cl.usersContacts}>
            <h3>My Contacts:</h3>
            <ul>
                <li>Facebook: {props.usersProfile.contacts.facebook}</li>
                <li>Web-Site: {props.usersProfile.contacts.website}</li>
                <li>VK: {props.usersProfile.contacts.vk}</li>
                <li>Twitter: {props.usersProfile.contacts.twitter}</li>
                <li>Instagram: {props.usersProfile.contacts.instagram}</li>
                <li>You-tube: {props.usersProfile.contacts.youtube}</li>
                <li>Git-Hub: {props.usersProfile.contacts.github}</li>
            </ul>
        </div>
    </div>

        </div>
)
}
export default ProfileInfo;