

let rerenderTree = () => {
    console.log("i am rerender")
}
let state = {
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

}
window.state = state;
 export const addPost = () =>{
    let id = state.profilePage.posts.length+1;
    let newPost = {
        id: id,
        likes:"0",
        text:state.profilePage.newPostText,
    }
    state.profilePage.posts.push(newPost);
     rerenderTree(state);
}
 export const updatePostText = (someText) => {
    state.profilePage.newPostText = someText;
     rerenderTree(state);
}
export const addMessage = () =>{
    let id = state.dialogsPage.messages.length+1;
    let newMessage = {
        id: id,
        message:state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    rerenderTree(state);
}
export const updateTextMessage = (textOfMessage) => {
    state.dialogsPage.newMessageText = textOfMessage;
    rerenderTree(state);
}

export const subscribe = (observer) =>{
    rerenderTree = observer;
}



export default state;