import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container-fluid">
      <small className="hi">Welcome To</small>
      <div className="title-home">
        <h1>Respect</h1>
      </div>
      <div className="title-developer">
        <h2>Studio & Web Desaigner</h2>
      </div>
      <div className="title-developer">
        <p>
          Respect Studio Didirikan untuk melayani jasa Fotografi, Videografi,
          Editing Foto/Video, Pembuatan Logo, Pembuatan Website, Dll 
        </p>
      </div>
    </div>
  );
}

export default Hero;
