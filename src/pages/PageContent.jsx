/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import "../css/PageContent.css";
import "../css/scrollBarCustom.css"
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PageContent({ tema, assunto, bg}) {
  const mensagem = "Sem dados para exibir!"
  return (
    <div className="PageContent">
      <NavBar />
      <header className={`text-center py-5 mb-4 PageContent__header ${bg}`}></header>
      <div className="container">
        <div className="row text-white">
          {assunto ? assunto.map((pagina, i) => (
            <div className="col-xl-3 col-md-6 mb-4" key={i}>
              <Link className="card border-0 shadow" to={`/${tema}/${pagina.topico}`}>
                <img src={pagina.imagem} className="card-img-top imgCard" alt="..." />
                <h5 className="card-title mb-0">{pagina.desc}</h5>
              </Link>
            </div>
          )) : mensagem}
        </div>
      </div>
    </div>
  );
}

export default PageContent;
