import { useEffect } from "react";
import "./Global CSS/App.css";
import { useDispatch } from "react-redux";

import Header from "./Components/Header/Header";
import Posts from "./Components/Posts/Posts";
import PCForm from "./Components/Create_Post_Form/PCForm";

import { getPosts } from "./Actions/posts.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Posts />
      <PCForm />
    </div>
  );
}

export default App;
