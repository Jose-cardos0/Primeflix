import "./Header.css";
//pages
import { Link } from "react-router-dom";
//assets
import logo from "../../assets/primeflix.png";

function HeaderApp() {
  return (
    <header>
      <div className="logoElinks">
        <Link className="logo" to="/">
          <img src={logo} alt="primeflix" />
        </Link>
        <Link className="linkOpcoes">Filmes</Link>
        <Link className="linkOpcoes">Séries</Link>
        <Link className="linkOpcoes">Animes</Link>
        <Link className="linkOpcoes">e-Esport</Link>
      </div>
      <Link className="favoritos" to="/favoritos">
        Favoritos
      </Link>
    </header>
  );
}

export default HeaderApp;
