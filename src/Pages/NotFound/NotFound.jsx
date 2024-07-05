import { Link } from "react-router-dom";
import "./NotFound.css";

function Erro() {
  return (
    <div className="containerNotFound">
      <h1 className="h1404">404</h1>
      <h1>Page Not Found</h1>
      <h2 className="erroh2">Erro ao carregar a página!</h2>
      <Link className="botaoAssistir" to="/">
        Filmes &rarr;
      </Link>
    </div>
  );
}

export default Erro;
