import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import Landing from "./components/Landing";
//import Dashboard from React.lazy(() => "./components/Dashboard");
import "./App.css";
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./components/Dashboard"));
function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
