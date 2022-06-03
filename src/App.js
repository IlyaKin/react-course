
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";



const App = (props)=>{
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="app-content-c">
            <Routes>
            <Route path='/dialogs' element=<Dialogs />/>
            <Route path='/content' element=<Content />/>
            </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
