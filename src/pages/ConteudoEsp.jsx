import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function ConteudoEsp(categoria) {
  const { assunto } = useParams();
  const item = categoria.categoria.assuntos.find((i) => i.topico == assunto);
  const titulo = item.conteudo.title;
  const descricao = item.conteudo.description;
  const imagem = item.conteudo.imagem;

  return (
    <div className="conteudo">
      <NavBar />
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5 mt-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={
                  imagem
                    ? imagem
                    : "https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                }
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1 text-white">FRONT-END</div>
              <h1 className="display-5 fw-bolder text-white">{titulo}</h1>
              <div className="fs-5 mb-5">
                <p className="text-white">{descricao}</p>
              </div>
              <div className="d-flex">
                <button
                  className="btn btn-outline-info flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  SABER MAIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConteudoEsp;
