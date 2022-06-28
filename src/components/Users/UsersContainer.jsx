import {connect} from "react-redux";
import Users from "./Users";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import {followAC, setUserAC, unfollowAC} from "../../redux/usersReducer";
import React from 'react';



let mapStateToProps = (props)=>{
    return{
        users:props.usersPage.users,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        followAction: (userID)=> {dispatch(followAC(userID))},
        unfollowAction:(userID)=> {dispatch(unfollowAC(userID))},
        setUsersAction:(users)=>{dispatch(setUserAC(users))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;