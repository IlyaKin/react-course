import cl from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={cl.dialog}>
            <NavLink to={path} className={data => data.isActive ? cl.active : cl.item}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItems;