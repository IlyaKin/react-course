import React from "react";
import cl from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/userPhoto.jpg'

class Users extends React.Component{

   getUsers = ()=>{
        if(this.props.users.length===0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>
                this.props.setUsersAction(response.data.items))
        }
    }

    render() {
     return   <div>
            <button onClick={this.getUsers}>Get Users</button>
            {

                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={cl.photoUser}/></div>
                    <div>
                      {u.followed
                          ? <button onClick={() => {
                              this.props.unfollowAction(u.id)
                          }}>Unfollow</button>
                          : <button onClick={() => {
                              this.props.followAction(u.id)
                          }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>Moscow</div>
                        <div>
                            Russia
                        </div>
                    </span>
                </span>
                </div>)
            }

        </div>
    }
}
export default Users;