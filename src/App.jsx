import "./App.css";
import Catalogue from "./Components/Catalogue/Catalogue";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import { Description } from "@mui/icons-material";
import Parking from "./Components/ParkingInfo/Parking";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="home">
          <div className="sidebar-dock">
            <Sidebar />
          </div>
          <div className="home-dock">
            <Routes>
              <Route path="/" element={<Landing />}>
                <Route exact path="/" element={<Catalogue />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
              </Route>
              <Route path="/parking" element={<Parking />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
