import cl from "../Friends.module.css";
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = "/friends/" + props.id;
    return(
    <div>
        <NavLink to={path} className={data => data.isActive ? cl.active : cl.item}>{props.name}</NavLink>
    </div>
    )
}
export default FriendItem;