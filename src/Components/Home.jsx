import React from "react";
import {NavBar} from './NavBar'
import { Banner } from "./Banner";
import Parallax from "./Parallax";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function Home() {
  return (
      <div className="App">
      <NavBar/>
      <Banner/>
      <Parallax/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default Home;
