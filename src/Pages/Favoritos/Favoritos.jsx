import "./Favoritos.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const resposta = localStorage.getItem("@primeflix");
    const filmesSalvos = JSON.parse(resposta);
    setFilmes(filmesSalvos);
  }, []);

  function removeItem(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    toast.success("Filme removido dos favoritos!");
  }

  console.log(filmes);
  return (
    <div className="meusFilmes">
      <h1>Meus Favoritos</h1>
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <div className="conteudoFavoritos">
                <span>{item.title}</span>
                <div className="buttonsFavoritos">
                  <Link className="linkFavoritos" to={`/moves/${item.id}`}>
                    Detalhes | &gt;
                  </Link>
                  <button
                    className="favoritos buttonExluir"
                    onClick={() => removeItem(item.id)}
                  >
                    Exluir | &times;
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
