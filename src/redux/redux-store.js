import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";



let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   friends: friendsReducer,
   usersPage:usersReducer});
let store = createStore(reducers);
window.store=store;

export default store;

