import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";

function Layout({ child }) {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="content-wrapper bg-light">
        <section className="content-header"></section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">{child}</div>
          </div>
          <div
            className="bg-light d-flex justify-content-between"
            style={{ bottom: "0" }}
          >
            <p className="text-secondary"></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Layout;
