import store from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

let initState = {
  users: [],
    currentPage:1,
    totalUsersCount:0,
    pageSize: 4,
}

const usersReducer = (state = initState, action) =>{

   switch (action.type){
       case FOLLOW:{
           return {
               ...state,
                users:state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    } return u;
                })}
       }
       case UNFOLLOW:{
           return {
               ...state,
               users:state.users.map(u=>{
                   if(u.id === action.userId){
                       return {...u, followed: false}
                   } return u;
               })}
       }
       case SET_USERS:{
           return {...state, users: [...state.users, ...action.users]}
       }
       case SET_CURRENT_PAGE:{
           return {...state, currentPage:action.currentPage}
       }
       case SET_USERS_TOTAL_COUNT:{
           return {...state, totalUsersCount: action.totalCountUsers}
       }

       default: return state;
   }
}

export const followAC = (userId)=> ({type:FOLLOW, userId})
export const unfollowAC = (userId)=> ({type:UNFOLLOW, userId})
export const setUserAC = (users) =>({type:SET_USERS, users})
export const setCurrentPageAC = (currentPage) =>({type:SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalCountUsers) =>({type:SET_USERS_TOTAL_COUNT, totalCountUsers})


export default usersReducer;