
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import About from "./components/About/About";
import News from "./components/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";



const App = (props)=>{


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="app-content-c">
            <Routes>
            <Route path='/dialogs/*' element=<Dialogs dialogsData={props.state.dialogsPage}/>/>
            <Route path='/content' element=<Content postsData={props.state.profilePage} addPost={props.addPost}/>/>
            <Route path='/about' element=<About />/>
            <Route path='/news' element=<News />/>
            </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
