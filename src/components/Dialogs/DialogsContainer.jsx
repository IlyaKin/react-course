
import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let updateTextMessage = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text))
    }
    let addMessageButton =() =>{
        props.store.dispatch(addMessageActionCreator());
    }

    return (
        <Dialogs addMessageAction={addMessageButton} updateMessageText={updateTextMessage}
                 newMessageText={state.dialogsPage.newMessageText} dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}/>
    )
}
export default DialogsContainer;