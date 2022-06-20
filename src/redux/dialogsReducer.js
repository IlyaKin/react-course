const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE"


let initState ={
    dialogs:[
        {id:"1", name:"Alexey"},
        {id:"2", name: "Irina"},
        {id:"3", name: "Sergey"},
        {id:"4", name:"Ivan"},
        {id:"5", name: "Alena"}],
    messages:[
        {id: 1, message:"Hi"},
        {id: 2, message: "Whats up"},
        {id: 3, message: "nigger"},
    ],
    newMessageText:''
}
const dialogsReducer = (state=initState, action) => {
    switch (action.type){
        case 'ADD-MESSAGE': {
            let id = state.messages.length+1;
            let newMessage = {
                id: id,
                message:state.newMessageText
            }
            state.newMessageText = '';
            state.messages.push(newMessage);
            return state;
        }
        case 'UPDATE-TEXT-MESSAGE': {
            state.newMessageText = action.textOfMessage;
            return  state;
        }
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type:ADD_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type:UPDATE_TEXT_MESSAGE, textOfMessage: text})
export default dialogsReducer;