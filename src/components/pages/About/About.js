import React from "react";
import "./About.css";
import hero from "../../../images/PlantStructure.jpeg";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          image={hero}
          alt="About Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">Manufacturing applications!</h1>
        <p id="p-about">
          Welcome to my portfolio site. After 30+ years of experience in chemicals manufacturing, I have started a new journey in coding and web development. My portfolio includes about 15 active sites on my Github repo, with many more to come. Check back on my site for future projects!
           
        </p>
        <p id="p-about">
          {" "}
        </p>
        <p id="p-about">
          
        </p>
    
      </div>
    </>
  );
}