import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { createContext } from "react";


import Header from "./Components/Header/Header";
import MovieList from "./Components/movieList/MovieList";
import MovieDetails from "./Pages/movieDetails/MovieDetails";

import { getMoviesLIst } from "./Functions/getMoviesList";

import Home from "./Pages/home/Home";

export const globalData = createContext();

function App() {
  const [popularMoviesFromApi, setPopularMoviesFromApi] = useState([]);
  const [upcomingMoviesFromApi, setUpcomingMoviesFromApi] = useState([]);
  const [topRatedMoviesFromApi, setTopRatedMoviesFromApi] = useState([]);
  const [state, setstate] = useState([]);

  useEffect(() => {
    getMoviesLIst(setPopularMoviesFromApi, "popular");
    getMoviesLIst(setTopRatedMoviesFromApi, "top_rated");
    getMoviesLIst(setUpcomingMoviesFromApi, "upcoming");
  }, []);

  return (
    <globalData.Provider
      value={{
        popularMoviesFromApi: popularMoviesFromApi,
        topRatedMoviesFromApi: topRatedMoviesFromApi,
        upcomingMoviesFromApi: upcomingMoviesFromApi,
        state, setstate
      }}
    >
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="movie/:id" element={<MovieDetails/>}></Route>
            <Route path="movies/:category" element={<MovieList/>}></Route>
            <Route path="/*" element={<h1>Page Not Found</h1>}></Route>
          </Routes>
        </Router>
      </div>
    </globalData.Provider>
  );
}

export default App;