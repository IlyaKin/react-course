import {rerenderTree} from "../render";


let state = {
    profilePage:{
        posts:[
            {id:'1', likes:'12', text:'Whats up!'},
            {id:'2', likes:'41', text:'Who are you?'}]},
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
 export let addPost = (postMessage) =>{
    let newPost = {
        id:"3",
        likes:"0",
        text:postMessage,
    }
    state.profilePage.posts.push(newPost);
     rerenderTree(state);
}
export default state;