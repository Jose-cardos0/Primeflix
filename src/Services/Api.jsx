//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=53998aa292fe671a9c2362a2a8957fbf&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
