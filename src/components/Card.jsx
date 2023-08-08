import Yoda from "../assets/yoda.png";
import { Link } from "react-router-dom"
import img02 from "../assets/2.webp"
import img03 from "../assets/3.webp"
import img04 from "../assets/4.webp"


function Cards() {
  return (
    <div className="container">
      <div className="row text-center text-lg-start">
        <div className="col-lg-6 col-md-4 col-12">
          <Link to="/html" className="d-block mb-4 h-100">
            <img
              className="img-fluid img-thumbnail"
              src={Yoda}
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-6 col-md-4 col-12">
          <Link to="/css" className="d-block mb-4 h-100">
            <img
              className="img-fluid img-thumbnail"
              src={img02}
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-6 col-md-4 col-12">
          <Link to="/javascript" className="d-block mb-4 h-100">
            <img
              className="img-fluid img-thumbnail"
              src={img03}
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-6 col-md-4 col-12">
          <Link to="/algoritmo" className="d-block mb-4 h-100">
            <img
              className="img-fluid img-thumbnail"
              src={img04}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
