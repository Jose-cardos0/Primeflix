//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=53998aa292fe671a9c2362a2a8957fbf&language=pt-BR

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../Services/Api";
import { toast } from "react-toastify";

//css
import "./Moves.css";

function Moves() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "53998aa292fe671a9c2362a2a8957fbf",
            language: "pt-BR",
          },
        });
        setFilme(response.data);
        setLoading(false);
      } catch (error) {
        navigate("/", { replace: true });
      }
    }
    loadFilmes();
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const conteudoDaLista = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === filme.id
    );

    if (conteudoDaLista) {
      toast.warn("Este filme já está em sua lista.");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  let coresAvaliação;
  if (filme.vote_average <= 6) {
    coresAvaliação = "vermelho";
  } else {
    coresAvaliação = "verde";
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        className="imgAssistir"
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <p className="justify">{filme.overview}</p>
      <strong>
        Avaliação:
        <div className={coresAvaliação}> {filme.vote_average.toFixed(0)}</div>
        /10
      </strong>
      <div className="areaButtons">
        <button className="favoritos" onClick={salvarFilme}>
          Salvar
        </button>
        <button className="favoritos">
          <a
            href={`https://www.youtube.com/results?search_query=${filme.title}Trailer`}
            target="_blank"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Moves;
