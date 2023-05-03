import "./App.css";
import Catalogue from "./Components/Catalogue/Catalogue";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import UserProfile from "./Components/UserProfile/UserProfile";
import Parking from "./Components/ParkingInfo/Parking";
import Bookings from "./Components/Bookings/Bookings";
import { Backdrop } from "@mui/material";
import Loader from "./Components/Loader/Loader";
import { useDataLayerValue } from "./Datalayer/DataLayer";
import { useEffect } from "react";
import { Api } from "./Api/Axios";
function App() {
  const { state, changeLoginState, startLoading, stopLoading } =
    useDataLayerValue();
  // const { loggedIn } = state;

  const getUser = async (token) => {
    startLoading();
    await Api.get("/auth/getUser")
      .then((res) => {
        const userData = res.data.user;
        changeLoginState(userData, token);
      })
      .catch((err) => {
        console.log(err?.response?.data?.error?.message);
      });
    stopLoading();
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    const token = localStorage.getItem("AUTH_TOKEN");
    if (token) {
      getUser(token);
    }
  }, []);

  return (
    <>
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
                  <Route exact path="/bookings" element={<Bookings />} />
                  <Route exact path="/profile" element={<UserProfile />} />
                </Route>
                <Route path="/parking" element={<Parking />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
      <Backdrop
        sx={{ color: "#fff", zIndex: "5000000000" }}
        open={state?.loading}
      >
        <Loader />
      </Backdrop>
    </>
  );
}

export default App;
