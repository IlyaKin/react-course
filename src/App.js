
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Friends from "./components/Friends/Friends";
import ProfileContainer from "./components/Content/ProfileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import About from "./components/About/About";
import News from "./components/News/News";
import { Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props)=>{
  return (

      <div className="App">
        <HeaderContainer />
        <Navbar />
        <div className="app-content-c">
            <Routes>
            <Route path='/dialogs/*' element=<DialogsContainer />/>
            <Route path='/profile/:userId' element={<ProfileContainer />}/>
            <Route path='/profile' element=<ProfileContainer />/>
            <Route path='/friends' element=<FriendsContainer />/>
            <Route path='/about' element=<About />/>
            <Route path='/news' element=<News />/>
            <Route path='/users' element=<UsersContainer />/>
            </Routes>
        </div>
    </div>

  );
}

export default App;
