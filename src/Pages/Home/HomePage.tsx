import React from "react";

import "./CSS/HomePage.css";
import Posts from "../../Components/Posts/Posts";
import PCForm from "../../Components/Create_Post_Form/PCForm";

function Home() {
  return (
    <div className="homePage">
      <div className="postsside">
        <Posts />
      </div>
      <div className="pcformside">
        <PCForm />
      </div>
    </div>
  );
}

export default Home;
