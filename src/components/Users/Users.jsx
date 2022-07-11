import React from "react";
import cl from './Users.module.css';
import userPhoto from './../../assets/images/userPhoto.jpg'
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    return <div>

        {

            props.users.map(u => <div key={u.id}>
                <div className={cl.users}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={cl.photoUser}/>
                        </NavLink>
                    </div>
                    <div className={cl.following}>
                        {u.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials:true,
                                    headers:{"API-KEY": "0a67634a-1249-4fdb-af85-ffcea0896354"}
                                })
                                    .then(response => {
                                        if(response.data.resultCode===0){
                                        props.unfollowAction(u.id);}
                                    })
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials:true,
                                    headers:{"API-KEY": "0a67634a-1249-4fdb-af85-ffcea0896354"}
                                })
                                    .then(response => {
                                        if(response.data.resultCode===0){
                                        props.followAction(u.id);}
                                    })
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
            {props.isFetching ? <Preloader/> : <button className={cl.showMoreButton} onClick={(e) => {
                props.onPageChanged()
            }}>SHOW MORE
            </button>}
        </div>

    </div>

}


export default Users;