import cl from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
        <img src="https://klike.net/uploads/posts/2019-06/1561526578_1.jpg" alt=""/>
    <div className={cl.description}>
        Avatar + description
    </div>
        </div>
)
}
export default ProfileInfo;