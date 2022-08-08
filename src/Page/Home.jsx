import React from "react";
import Navbar from "../Components/Navbar";
import Video from "../Components/Video";
import Service from "../Components/Service";
import Service2 from "../Components/Service2";
import About from "../Components/About";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <div className="flex flex-col absolute top-0">
        <Video />
        <Service />
        <Service2 />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
      
    </>
  );
}

export default Home;


{/* <div className="flex flex-col absolute top-0">
        <Video />
        <Service />
        <Service2 />
      </div> */}