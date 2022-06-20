import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import React from 'react';

const Dialogs = (props) => {

    let dialogs = props.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id}/>)
    let messages = props.messages.map(message => <MessageItems message={message.message} id={message.id}/>)
    let updateTextMessage = (e) => {
        let text = e.target.value;
        props.updateMessageText(text)
    }
    let addMessageButton =() =>{
        props.addMessageAction();
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogs}
            </div>
            <div className={cl.messages}>
                {messages}
            </div>
            <div className={cl.messageInput}>
                <textarea rows="3" value={props.newMessageText} onChange={updateTextMessage}></textarea>
                <div><button onClick={addMessageButton}>Send</button></div>
            </div>
        </div>
    )
}
export default Dialogs;