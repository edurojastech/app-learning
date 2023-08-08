import "./App.css";
import { RouterProvider } from "react-router-dom"
import Conteudo from "./pages/Conteudo";
import routes from "./routes";

function App() {
  return (
    <>
      <Conteudo>
        <RouterProvider router={routes}/>
      </Conteudo>
    </>
  );
}

export default App;
