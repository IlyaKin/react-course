import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={cl.dialog}>
            <NavLink to={path} className={data => data.isActive ? cl.active : cl.item}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return(
        <div className={cl.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    let dialogData = [{id:"1", name:"Alexey"},
        {id:"2", name: "Irina"},
        {id:"3", name: "Sergey"},
        {id:"4", name:"Ivan"},
        {id:"5", name: "Alena"}]

    let messageData = [
        {id:"1", message:"Hi"},
        {id:"2", message: "Whats up"},
        {id:"3", message: "nigger"},
    ]
    let dialogs = dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messages = messageData.map(message => <Message message={message.message} id={message.id}/>)
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogs}
            </div>
            <div className={cl.messages}>
                {messages}
            </div>
        </div>
    )
}
export default Dialogs;