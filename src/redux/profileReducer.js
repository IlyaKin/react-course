const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_POST = "ADD-POST";

let initState ={
    posts:[
        {id: 1, likes:'12', text:'Whats up!'},
        {id: 2, likes:'41', text:'Who are you?'}],
    newPostText: ''
}
const profileReducer = (state=initState, action) => {
   switch (action.type){
       case 'ADD-POST':{
           let id = state.posts.length + 1;
           let newPost = {
               id: id,
               likes: "0",
               text: state.newPostText,
           }
           state.newPostText = '';
           state.posts.push(newPost);
           return state;
       }
       case 'UPDATE-POST-TEXT':{
           state.newPostText = action.someText;
           return state;
       }
       default:
           return state;
   }
}
export const addPostActionCreator = () => ({type:ADD_POST})
export const updatePostTextActionCreator = (text) => ({type:UPDATE_POST_TEXT, someText: text})

export default profileReducer;