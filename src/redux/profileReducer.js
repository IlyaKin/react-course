const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE"

let initState ={
    posts:[
        {id: 1, likes:'12', text:'Whats up!'},
        {id: 2, likes:'41', text:'Who are you?'}],
    newPostText: '',
    usersProfile: null
}
const profileReducer = (state=initState, action) => {
   switch (action.type){
       case ADD_POST:{
           let id = state.posts.length + 1;
           let newPost = {
               id: id,
               likes: "0",
               text: state.newPostText,
           }
           return {
               ...state,
               posts: [...state.posts, {...newPost}],
               newPostText: '',
           }
       }
       case UPDATE_POST_TEXT:{

           return {
               ...state,
               newPostText: action.someText
           }
       }
       case SET_USERS_PROFILE:{
           return {...state, usersProfile: action.profile}
       }
       default:
           return state;
   }
}
export const addPostActionCreator = () => ({type:ADD_POST})
export const updatePostTextActionCreator = (text) => ({type:UPDATE_POST_TEXT, someText: text})
export const setUsersProfile = (profile) => ({type:SET_USERS_PROFILE, profile})


export default profileReducer;