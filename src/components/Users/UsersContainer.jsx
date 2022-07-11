import {connect} from "react-redux";
import {
    followAction, unfollowAction, setUsersAction, setCurrentPage, toogleIsFetching
} from "../../redux/usersReducer";
import React from 'react';
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=
        ${this.props.pageSize}`, {withCredentials:true})
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsersAction(response.data.items);
            });
    }


    onPageChanged = () => {
        let currentPage = this.props.currentPage + 1;
        this.props.setCurrentPage(currentPage);
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=
        ${this.props.pageSize}`, {withCredentials:true})
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsersAction(response.data.items);
            });
    }

    render() {

        return <Users users={this.props.users}
                      followAction={this.props.followAction}
                      unfollowAction={this.props.unfollowAction}
                      onPageChanged={this.onPageChanged}
                      isFetching={this.props.isFetching}/>
    }
}

let mapStateToProps = (props) => {
    return {
        users: props.usersPage.users,
        pageSize: props.usersPage.pageSize,
        currentPage: props.usersPage.currentPage,
        totalCountUsers: props.usersPage.totalUsersCount,
        isFetching: props.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    followAction, unfollowAction, setUsersAction, setCurrentPage, toogleIsFetching
})(UsersContainer);