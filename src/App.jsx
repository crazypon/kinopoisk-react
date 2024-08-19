import React from "react";
import Movies from "./components/Movies";
import MovieDescription from "./components/MovieDescription";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import NotFound from "./components/PageNotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDescription />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </div>
  
  )
}


export default App;