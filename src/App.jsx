import "./App.css";
import Landing from "./Components/Landing/Landing";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="home">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="home-dock">
          <Landing />
        </div>
      </div>
    </div>
  );
}

export default App;
