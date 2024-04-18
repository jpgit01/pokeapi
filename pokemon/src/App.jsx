import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import Pokemon from "./layout/Pokemon";
import Details from "./layout/Details";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./layout/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
