import React from "react";
import Project1 from "../Asset/Project1.jpg";
import Project2 from "../Asset/Project2.jpg";
import Project5 from "../Asset/Project5.png";
//import Project4 from "../Asset/Project4.png";

function Project() {
  return (
    <div className="container-fluid mt-3">
      <p className="title-page">Product</p>
      <div className="project ">
        <div
          className="container"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <div className="card" style={{ width: "18rem", height: "55%" }}>
            <img
              className="card-img-top"
              src={Project1}
              alt="Card img cap"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Fotografi & Videografi</h5>
              <p className="card-text text-secondary">
                Melayani Fotografi dan Videografi berbagai
                Macam acara dan segala bentuk foto/video
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", height: "55%" }}>
            <img
              className="card-img-top"
              src={Project2}
              alt="Card img cap"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Pembuatan Logo</h5>
              <p className="card-text text-secondary">
                Melayani pembuatan berbagai macam
                bentuk logo untuk Persobal, Perusahaan,
                Bisnis
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", height: "55%" }}>
            <img
              className="card-img-top"
              src={Project5}
              alt="Card img cap"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">
                Pembuatan Website
              </h5>
              <p className="card-text text-secondary">
                Melayani pembuatan sebuah website
                untuk Personal, Perusahaan, dan
                Bisnis. Bisa request style website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
