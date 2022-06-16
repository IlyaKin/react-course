const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE"

const dialogsReducer = (state, action) => {
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