import React from "react";
import cl from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/userPhoto.jpg'

let Users = (props) => {
    return <div>

        {

            props.users.map(u => <div key={u.id}>
                <div className={cl.users}>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={cl.photoUser}/></div>
                    <div className={cl.following}>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollowAction(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.followAction(u.id)
                            }}>Follow</button>}
                    </div>


                    <div className={cl.nickName}>{u.name}</div>
                    <div className={cl.status}>{u.status}</div>

                    <div className={cl.city}>Moscow</div>
                    <div className={cl.country}>
                        Russia
                    </div>


                </div>
            </div>)
        }
        <div>
            <button onClick={(e) => {
                props.onPageChanged()
            }}>SHOW MORE
            </button>
        </div>
    </div>

}


export default Users;