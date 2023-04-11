import './App.css';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import CheckRatePage from './pages/checkRate';
import Events from './pages/event';
import Event1 from './pages/event1';
import Event2 from './pages/event2';
import BuyerProfile from './pages/buyerProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/checkRateList" element={<CheckRatePage />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/event1" element={<Event1 />} />
        <Route exact path="/event2" element={<Event2 />} />
        <Route exact path="/buyerprofile" element={<BuyerProfile />} />
      </Routes>

      {/* <Navbar /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <CheckRatePage /> */}
    </div>
  );
}

export default App;
