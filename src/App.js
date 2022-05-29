import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt=""/>
      </header>
        <nav className="nav">
            <div>
                Home
            </div>
            <div>
                About
            </div>
            <div>
                Messages
            </div>
            <div>
                Feed
            </div>
        </nav>
        <div className="content">
            Main content
        </div>
    </div>
  );
}

export default App;
