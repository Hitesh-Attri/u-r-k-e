import React from "react";
import { Box, Button, Container, Slider, Typography } from "@mui/material";
import SliderComp from "./components/SliderComp";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Stats from "./components/Stats";
import SliderSection from "./components/SliderSection";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div
        className="main"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Profile />
        <Stats />
        <SliderSection />
      </div>

      {/* <div className="profile-section"></div> */}
      {/* <div className="charts"></div>s */}
      {/* <SliderComp /> */}
    </div>
  );
};

export default App;
