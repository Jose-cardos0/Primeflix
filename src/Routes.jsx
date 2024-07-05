import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home/Home";
import Moves from "./Pages/Moves/Moves";
import Header from "./Components/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Favoritos from "./Pages/Favoritos/Favoritos";

function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moves/:id" element={<Moves />} />
          <Route path="/favoritos" element={<Favoritos />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesApp;
