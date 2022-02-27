import { useEffect } from "react";
import "./Global CSS/App.css";
import { useDispatch } from "react-redux";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/HomePage";

import { getPosts } from "./Actions/posts.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
