import Yoda from "../assets/yoda.png";
import img02 from "../assets/2.webp"
import img03 from "../assets/3.webp"
import img04 from "../assets/4.webp"
import CardCustom from "./CardCustom";

function Cards() {
  return (
    <div className="container">
      <div className="row text-center text-lg-start">
        <CardCustom 
          rota="/html" 
          urlImagem={Yoda} 
          id="Yoda do HTML"
          aria-label="Yoda do HTML"
          data-name="Yoda do HTML"
        />

        <CardCustom 
          rota="/css" 
          urlImagem={img02} 
        />

        <CardCustom 
          rota="/javascript" 
          urlImagem={img03} 
        />

        <CardCustom 
          rota="/algoritmo" 
          urlImagem={img04} 
        />
      </div>
    </div>
  );
}

export default Cards;
