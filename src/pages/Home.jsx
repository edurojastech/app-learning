/* eslint-disable react/prop-types */
import { useState } from "react";
import "../css/Home.css";

function Home({ children }) {
  const [frase, setFrase] = useState("Universo da programação");
  const frases = [
    "Universo dos códigos",
    "Mundo dos Nerds",
    "Mundo dos códigos"
  ];

  setTimeout(() => {
    setFrase(frases[Math.floor(Math.random() * 2)]);
  }, 25000);

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6 pt-5" id="content">
          <div className="login d-flex pt-5 align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h2 className="login-heading text-center text-white pt-5">
                    <b>{frase}</b>
                  </h2>
                  <hr />
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
