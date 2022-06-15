const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE"

let store = {
    _state:{
        users:
          [{id:1, name:'Alexey'},
            {id:2, name:'Irina'},
              {id:3, name:'Sergey'},
              {id:4, name:'Ivan'},
              {id:5, name:'Alena'}
              ],
        profilePage:{
            posts:[
                {id: 1, likes:'12', text:'Whats up!'},
                {id: 2, likes:'41', text:'Who are you?'}],
            newPostText: ''
        },

        dialogsPage:{
            dialogs:[{id:"1", name:"Alexey"},
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
    },
    _callSubscriber(){
        console.log("i am rerender")
    },

    getState(){
        return this._state;
    },
    subscribe (observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type === 'ADD-POST'){
            let id = this._state.profilePage.posts.length+1;
            let newPost = {
                id: id,
                likes:"0",
                text:this._state.profilePage.newPostText,
            }
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE-POST-TEXT'){
            this._state.profilePage.newPostText = action.someText;
            this._callSubscriber(this._state);
        }else if(action.type === 'ADD-MESSAGE'){
            let id = this._state.dialogsPage.messages.length+1;
            let newMessage = {
                id: id,
                message:this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE-TEXT-MESSAGE'){
            this._state.dialogsPage.newMessageText = action.textOfMessage;
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreator = () => ({type:ADD_POST})
export const updatePostTextActionCreator = (text) => ({type:UPDATE_POST_TEXT, someText: text})
export const addMessageActionCreator = () => ({type:ADD_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type:UPDATE_TEXT_MESSAGE, textOfMessage: text})

window.store = store;

export default store;