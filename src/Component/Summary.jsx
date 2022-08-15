import React from "react";
import "./Summary.css";
function Summary() {
  return (
    <div className="container-fluid mt-3">
      <p className="title-page">List Jasa Pelayanan Di Respect Studio</p>
      <div className="summary ">
        <div className="row  ">
          <div className="col">
            <h5>Fotografi & Videografi</h5>
            <p>
              Melayani berbagai macam pelayanan Fotografi dan
              Videografi seperti Edit Foto, Edit Video, Melayani
              Foto Wedding, Foto Keluarga
            </p>
          </div>
          <div className="col">
            <h5>Pembuatan Logo</h5>
            <p>
              Pembuatan berbagai macam logo untuk perusahaan,
              Personal/Pribadi, dan Bisnis
            </p>
          </div>
          <div className="col">
            <h5>Pembuatan Website</h5>
            <p>
              Melayani pembuatan sebuah Website berbagai macam
              style untuk Personal, Perusahaan, Bisnis, Dll
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
