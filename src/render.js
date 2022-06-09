import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost, updatePostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderTree = (state)=>{
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </React.StrictMode>
    );
}
export {rerenderTree};