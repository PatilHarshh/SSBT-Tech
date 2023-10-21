import React from "react";
import {NavBar} from './NavBar'
import { Banner } from "./Banner";
import Parallax from "./Parallax";

function Home() {
  return (
      <div className="App">
      <NavBar/>
      <Banner/>
      <Parallax/>
      <Banner/>


    </div>
  );
}

export default Home;
