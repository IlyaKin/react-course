
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Friends from "./components/Friends/Friends";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import About from "./components/About/About";
import News from "./components/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateTextMessage} from "./redux/state";

const App = (props)=>{
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="app-content-c">
            <Routes>
            <Route path='/dialogs/*' element=<Dialogs dialogsData={props.state.dialogsPage} dispatch={props.dispatch}/>/>
            <Route path='/content' element=<Content profilePage={props.state.profilePage} dispatch={props.dispatch}/>/>
            <Route path='/friends' element=<Friends users={props.state.users}/>/>
            <Route path='/about' element=<About />/>
            <Route path='/news' element=<News />/>
            </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
