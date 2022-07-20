import store from "./redux-store";

const SET_AUTH_USERS_DATA = 'SET_AUTH_USERS_DATA';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'

let initState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}

const authReducer = (state = initState, action) =>{
   switch (action.type){

       case SET_AUTH_USERS_DATA:{
           return {
               ...state,
               ...action.data,
                isAuth: true}
       }

       case TOOGLE_IS_FETCHING:{
           return {...state, isFetching: action.isFetch}
       }

       default: return state;
   }
}


export const setAuthUsersData = (userId, email, login) =>({type:SET_AUTH_USERS_DATA, data:{userId, email, login}})

export const toogleIsFetching = (isFetch) => ({type:TOOGLE_IS_FETCHING, isFetch})


export default authReducer;