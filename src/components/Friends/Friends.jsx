import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import cl from "./Friends.module.css"

const Friends = (props)=>{

    let users = props.friends.map(user=> <FriendItem name={user.name} id={user.id}/>)
    return (
        <div>
        <div>
            <h3>Мои друзья</h3>
        </div>
        <div className={cl.userItems}>
            {users}
        </div>
        </div>
    )
}
export default Friends;