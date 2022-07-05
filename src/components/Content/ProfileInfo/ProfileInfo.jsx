import cl from "./ProfileInfo.module.css"
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.usersProfile){
        return <Preloader />
    }

    return (
        <div>
    <div className={cl.description}>
        <img src={props.usersProfile.photos.large} alt=""/>

    </div>
        </div>
)
}
export default ProfileInfo;