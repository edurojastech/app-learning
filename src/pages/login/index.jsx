/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import imageDev from "../../assets/dev.jpg";
import imageLogo from "../../assets/logo.png";
import "../../css/Login.css";

export default function LoginPage() {
  return (
    <main className="row">
      <div className="col-md-6" id="bloco__imageDev">
        <img src={imageDev} alt="dev" style={{ height: "100vh" }} />
      </div>
      <div
        className="col-md-6"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <form
          style={{
            width: "450px",
          }}
        >
          <div
            className="pb-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <img src={imageLogo} alt="logo" width={64} />
            <p className="text-white" style={{ fontSize: 36, paddingTop: 12 }}>
              CodeVerso
            </p>
          </div>

          <div>
            <h1 className="text-center">Explore o universo da programação!</h1>
            <hr />
            <p className="lead text-center">
              Aqui você encontra dicas, conteúdos e aprendizados para elevar
              suas habilidades no desenvolvimento web. <br /> Embarque nessa
              jornada e descubra tudo sobre o mundo do código!
            </p>
          </div>

          <hr />
          <div className="d-grid">
            <button
              style={{
                backgroundColor: "#0CA88E",
                border: "none",
              }}
              className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
              type="button"
            >
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  width: "100%",
                  display: "block",
                }}
              >
                Start na Jornada
              </Link>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
