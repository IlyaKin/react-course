import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";

const Dialogs = (props) => {

    let dialogs = props.dialogsData.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id}/>)
    let messages = props.dialogsData.messages.map(message => <MessageItems message={message.message} id={message.id}/>)
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