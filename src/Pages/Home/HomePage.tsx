import React from "react";

import "./CSS/HomePage.css";
import Posts from "../../Components/Posts/Posts";
import PCForm from "../../Components/Create_Post_Form/PCForm";

function Home() {
  return (
    <div className="homePage">
      <div>
        <Posts />
      </div>
      <div>
        <PCForm />
      </div>
    </div>
  );
}

export default Home;
