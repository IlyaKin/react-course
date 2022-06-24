
import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageText:state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addMessageAction: ()=> {dispatch(addMessageActionCreator())},
        updateMessageText:(text)=> {dispatch(updateMessageTextActionCreator(text))}
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;