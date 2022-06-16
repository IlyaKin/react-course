import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


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
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._state.profilePage = profileReducer(this._state.profilePage, action);

       this._callSubscriber(this._state);

    }
}



window.store = store;

export default store;