import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import Landing from "./components/Landing";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
