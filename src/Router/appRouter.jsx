import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/home.jsx";
import MovieDetails from "../Pages/MovieDetails/movieDetails.jsx";
import About from "../Pages/About/about.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/genre" element={<Genre />} /> */}
    </Routes>
  );
}
