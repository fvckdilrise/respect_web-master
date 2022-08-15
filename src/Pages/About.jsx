import React from "react";
import "./About.css";
function About() {
  return (
    <div className="container bg-light">
      <div className="hero">
        <div className="row d-flex justify-content-center">
          <h1>
            What about <strong className="text-primary">Respect</strong>
          </h1>
        </div>
        <div className="row d-flex justify-content-center">
          <p className="text-secondary">Hello Let me tell about Respect</p>
        </div>
      </div>
      <div className="story mt-3">
        <strong>Latar Belakang Respect</strong>
        <p className="text-secondary">
          Respect Studio Didirikan untuk melayani jasa Fotografi,
          Videografi, Editing Foto/Video, Pembuatan Logo, Dan pelayanan lainnya<br></br>
          Dan Banyak keunggulan lainnya{" "}
          <br></br>
          Respect Studio memiliki pekerja banyak jadi pengerjaan jasa akan lebih
          cepat selesai <br></br>
          <br></br>
          <strong>Apa Keunggulan Memakai Jasa Di Respect Studio?</strong>
          <br></br>Dilakukan oleh orang-orang profesional, Dikerjakan secara
          detail dan seksama, Dikerjakan oleh banyak orang maka pengerjaan akan
          lebih cepat selesai
          <br></br>
          <br></br>
          <strong>Alamat</strong>
          <br></br>
          Jl. Raya Gesi - Sukodono KM 10
        </p>
      </div>
    </div>
  );
}

export default About;
