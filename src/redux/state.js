import {rerenderTree} from "../render";

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
            {id:"1", message:"Hi"},
            {id:"2", message: "Whats up"},
            {id:"3", message: "nigger"},
        ]
    }

}
 export let addPost = () =>{
    let id = state.profilePage.posts.length+1;
    let newPost = {
        id: id,
        likes:"0",
        text:state.profilePage.newPostText,
    }
    state.profilePage.posts.push(newPost);
     rerenderTree(state);
}
 export let updatePostText = (someText) => {
    state.profilePage.newPostText = someText;
     rerenderTree(state);
}


export default state;