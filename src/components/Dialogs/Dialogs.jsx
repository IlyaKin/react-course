import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let inputMessage = React.createRef();
    let dialogs = props.dialogsData.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id}/>)
    let messages = props.dialogsData.messages.map(message => <MessageItems message={message.message} id={message.id}/>)
    let updateTextMessage = () => {
        let text = inputMessage.current.value;
        let action = {type:'UPDATE-TEXT-MESSAGE', textOfMessage: text};
        props.dispatch(updateMessageTextActionCreator(text))
    }
    let addMessage =() =>{
        props.dispatch(addMessageActionCreator());
        inputMessage.current.value = ""
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
                <textarea ref={inputMessage} rows="3" value={props.newMessageText} onChange={updateTextMessage}></textarea>
                <div><button onClick={addMessage}>Send</button></div>
            </div>
        </div>
    )
}
export default Dialogs;