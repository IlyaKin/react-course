import {connect} from "react-redux";
import {
    followAction, unfollowAction, setUsersAction, setCurrentPage, toggleIsFetching, toggleFollowingInProgress
} from "../../redux/usersReducer";
import React from 'react';
import * as axios from "axios";
import Users from "./Users";
import {userAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentWillMount() {
         this.props.toggleIsFetching(true)
       userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsersAction(data.items);
            });
    }

    onPageChanged = () => {
        let currentPage = this.props.currentPage + 1;
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        userAPI.addUsersFromServer(currentPage, this.props.pageSize)
            .then(data => {
                debugger
                this.props.toggleIsFetching(false)
                this.props.setUsersAction(data.items);
            });
    }

    render() {

        return <Users users={this.props.users}
                      followAction={this.props.followAction}
                      unfollowAction={this.props.unfollowAction}
                      onPageChanged={this.onPageChanged}
                      isFetching={this.props.isFetching}
                      followingInProgress = {this.props.followingInProgress}
                      toggleFollowingInProgress={this.props.toggleFollowingInProgress}  />
    }
}

let mapStateToProps = (props) => {
    return {
        users: props.usersPage.users,
        pageSize: props.usersPage.pageSize,
        currentPage: props.usersPage.currentPage,
        totalCountUsers: props.usersPage.totalUsersCount,
        isFetching: props.usersPage.isFetching,
        followingInProgress: props.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    followAction, unfollowAction, setUsersAction, setCurrentPage, toggleIsFetching, toggleFollowingInProgress
})(UsersContainer);