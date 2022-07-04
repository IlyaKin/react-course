import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import {followAC, setCurrentPageAC, setUserAC, setUsersTotalCountAC, unfollowAC} from "../../redux/usersReducer";
import React from 'react';
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=
        ${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersAction(response.data.items);
                //this.props.setUsersTotalCount(response.data.totalCount);
            });
    }



    onPageChanged = () => {
        let currentPage = this.props.currentPage + 1;
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=
        ${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersAction(response.data.items);
            });
    }

    render() {
        return  <Users users={this.props.users}
                       followAction={this.props.followAction}
                       unfollowAction={this.props.unfollowAction}
                       onPageChanged={this.onPageChanged}/>
    }
}

let mapStateToProps = (props)=>{
    return{
        users:props.usersPage.users,
        pageSize: props.usersPage.pageSize,
        currentPage:props.usersPage.currentPage,
        totalCountUsers: props.usersPage.totalUsersCount
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        followAction: (userID)=> {dispatch(followAC(userID))},
        unfollowAction:(userID)=> {dispatch(unfollowAC(userID))},
        setUsersAction:(users)=>{dispatch(setUserAC(users))},
        setCurrentPage:(currentPage)=>{dispatch(setCurrentPageAC(currentPage))},
    //     setUsersTotalCount:(totalCount)=>{dispatch(setUsersTotalCountAC(totalCount))}
     }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);