
import SchemaImages from "../db/SchemaImages";
import CardCustom from "./CardCustom";

function Cards() {
  const { Yoda, img02, img03, img04 } = SchemaImages
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
