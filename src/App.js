import './App.css';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
      </Routes>

      {/* <Navbar /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <CheckRatePage /> */}
    </div>
  );
}

export default App;
