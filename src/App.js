
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Friends from "./components/Friends/Friends";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import About from "./components/About/About";
import News from "./components/News/News";
import { Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props)=>{
  return (

      <div className="App">
        <Header />
        <Navbar />
        <div className="app-content-c">
            <Routes>
            <Route path='/dialogs/*' element=<DialogsContainer />/>
            <Route path='/content' element=<Content />/>
            <Route path='/friends' element=<Friends />/>
            <Route path='/about' element=<About />/>
            <Route path='/news' element=<News />/>
            </Routes>
        </div>
    </div>

  );
}

export default App;
