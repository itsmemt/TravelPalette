import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PageNotFound from "./components/pageNotFound";
import Home from "./components/Home/Home";
function App() {
  return (
      <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    </Routes>
  </Router>
  );
}

export default App;
