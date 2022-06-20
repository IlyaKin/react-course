import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   users: usersReducer});
let store = createStore(reducers);

export default store;

