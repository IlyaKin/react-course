import React from "react";
import cl from './Users.module.css'

const Users = (props)=>{


    return <div>
        {
            props.users.map(u=> <div key={u.id}>
                <span>
                    <div><img src={u.photoUrl} className={cl.photoUser}/></div>
                    <div>
                      {u.followed
                          ? <button onClick={()=>{props.unfollowAction(u.id)}}>Unfollow</button>
                          : <button onClick={()=>{props.followAction(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.firstName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>
                            {u.location.country}
                        </div>
                    </span>
                </span>
            </div>)
        }

    </div>

}
export default Users;