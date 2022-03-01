import { useEffect } from "react";
import "./Global CSS/App.css";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/HomePage";
import Auth from "./Pages/Auth/Auth";

import { getPosts } from "./Actions/actions.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
