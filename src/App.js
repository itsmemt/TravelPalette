import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PageNotFound from "./components/pageNotFound";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </Router>
  );
}

export default App;
