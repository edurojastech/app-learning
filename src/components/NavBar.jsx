import "../css/NavBar.css";
import Logo from "../assets/logo.png";
import LinksButton from "./LinkButton";

function navBar() {
  return (
    <nav className="navbar py-3 px-5 navegacao">
      <div className="text-white navegacao__logo">
        <a href="/">
          <img src={Logo} alt="logo" width="40" />
        </a>
      </div>
      <div className="text-white navegacao__links d-flex gap-3">
        <LinksButton desc="Home" estilos="text-dark btn-light" href={"/"} />
      </div>
    </nav>
  );
}

export default navBar;
