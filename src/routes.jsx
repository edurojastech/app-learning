import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PageContent from "./pages/PageContent";
import Cards from "./components/Card";
import Conteudo from "./pages/Conteudo";
import ConteudoEsp from "./pages/ConteudoEsp";
import SchemaHTML from "./db/SchemaHTML";
import SchemaCSS from "./db/SchemaCSS";
import SchemaJS from "./db/SchemaJS";
import SchemaALG from "./db/SchemaALG";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home>
        <Cards />
      </Home>
    ),
  },

  {
    path: "/html",
    element: (
      <PageContent tema="html" assunto={SchemaHTML.assuntos} bg="bgHTML" />
    ),
  },

  {
    path: "/css",
    element: <PageContent tema="css" assunto={SchemaCSS.assuntos} bg="bgCSS" />,
  },

  {
    path: "/javascript",
    element: (
      <PageContent tema="javascript" assunto={SchemaJS.assuntos} bg="bgJS" />
    ),
  },

  {
    path: "/algoritmo",
    element: <PageContent tema="algoritmo" assunto={SchemaALG.assuntos} />,
  },

  //paginas específica de conteudo
  {
    path: "html/:assunto",
    element: (
      <Conteudo>
        <ConteudoEsp categoria={SchemaHTML} voltar="/html" />
      </Conteudo>
    ),
  },

  {
    path: "css/:assunto",
    element: (
      <Conteudo>
        <ConteudoEsp categoria={SchemaCSS} voltar="/css" />
      </Conteudo>
    ),
  },

  {
    path: "javascript/:assunto",
    element: (
      <Conteudo>
        <ConteudoEsp categoria={SchemaJS} />
      </Conteudo>
    ),
  },

  {
    path: "algoritmo/:assunto",
    element: (
      <Conteudo>
        <ConteudoEsp categoria={SchemaALG} />
      </Conteudo>
    ),
  },
]);

export default router;
