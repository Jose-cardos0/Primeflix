import { useState, useEffect, useRef } from "react";
import api from "../../Services/Api";
import { Link } from "react-router-dom";

//css
import "./Home.css";

//glider
import Glider from "glider-js";
import "glider-js/glider.min.css";

function Home() {
  const [filmes, setFIlmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slider, setSlider] = useState(5);

  const gliderRef = useRef(null);
  //BASE DA URL: https://api.themoviedb.org/3/
  //URL DA API: /movie/now_playing?api_key=53998aa292fe671a9c2362a2a8957fbf&language=pt-BR

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
          page: 1,
        },
      });

      setFIlmes(response.data.results.slice(0, 20));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  useEffect(() => {
    if (filmes.length > 0) {
      new Glider(gliderRef.current, {
        slidesToShow: `${slider}`,
        slidesToScroll: 1,
        dots: ".dots",
        arrows: {
          prev: ".glider-prev",
          next: ".glider-next",
        },
        duration: 1.0,
      });
    } else {
      ("");
    }
  }, [filmes, slider]);

  useEffect(() => {
    const checarMedia = () => {
      if (window.innerWidth < 600) {
        setSlider(1);
      } else {
        setSlider(5);
      }
    };
    checarMedia();
  }, [setSlider]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando...</h2>
      </div>
    );
  } else {
    ("");
  }

  return (
    <div className="container">
      <div className="glider-contain">
        <button className="glider-prev">«</button>
        <div className="glider" ref={gliderRef}>
          {filmes.map((filme) => (
            <div key={filme.id} className="glider-item">
              <article>
                <div className="containerTitulo">
                  <strong className="tituloFilme">{filme.title}</strong>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  alt={filme.title}
                />
                <div>
                  <Link className="botaoAssistir" to={`/moves/${filme.id}`}>
                    Assistir
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
        <button className="glider-next" style={{ display: "none" }}>
          »
        </button>
        <div>
          <div className="dots"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
