import store from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'

let initState = {
  users: [],
    currentPage:1,
    totalUsersCount:0,
    pageSize: 4,
    isFetching: false
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
       case TOOGLE_IS_FETCHING:{
           return {...state, isFetching: action.isFetch}
       }

       default: return state;
   }
}

export const followAction = (userId)=> ({type:FOLLOW, userId})
export const unfollowAction = (userId)=> ({type:UNFOLLOW, userId})
export const setUsersAction = (users) =>({type:SET_USERS, users})
export const setCurrentPage = (currentPage) =>({type:SET_CURRENT_PAGE, currentPage})
// export const setUsersTotalCountAC = (totalCountUsers) =>({type:SET_USERS_TOTAL_COUNT, totalCountUsers})
export const toogleIsFetching = (isFetch) => ({type:TOOGLE_IS_FETCHING, isFetch})


export default usersReducer;