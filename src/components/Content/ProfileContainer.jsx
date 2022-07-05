import cl from './Profile.module.css'

import Profile from "./Profile";
import React from 'react';
import * as axios from "axios";
import {setUsersProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                .then(response => {
                    this.props.setUsersProfile(response.data)
                });
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
            this.props.setUsersProfile(response.data)
        });
    }


    render() {
        return (<Profile {...this.props} usersProfile={this.props.usersProfile}/>)
    }

}

let mapStateToProps = (state) => (
    {usersProfile: state.profilePage.usersProfile});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUsersProfile})(withRouter(ProfileContainer));