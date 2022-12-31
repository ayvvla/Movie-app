import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import Hero from "./components/Hero";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [genres, setGenres] = useState([]);
  const [videos, setVideos] = useState([]);
  const [count, setCount] = useState(1);
  const [searchCount, setSearchCount] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=4ba68f1b8b8618c7ee62687ed0732ff0&language=en-US&page=${count}`;
    const getMovies = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.results);
      setSelectedMovie(data.results[0]);
    };
    getMovies();

    const getGenres = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=4ba68f1b8b8618c7ee62687ed0732ff0&language=en-US"
      );
      const data = await res.json();
      setGenres(data.genres);
    };
    getGenres();
  }, [count]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${selectedMovie.id}?api_key=4ba68f1b8b8618c7ee62687ed0732ff0&append_to_response=videos`
      );
      const data = await res.json();
      setVideos(data.videos.results);
    };
    getVideos();
  }, [selectedMovie.id]);

  useEffect(() => {
    const getSearch = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=4ba68f1b8b8618c7ee62687ed0732ff0&language=en-US&query=${searchItem}&page=${searchCount}&include_adult=false`
      );
      const data = await res.json();
      setSearch(data.results);
    };
    getSearch();
  }, [searchItem, searchCount]);

  return (
    <div className="container">
      <Search
        search={search}
        setSearch={setSearch}
        searchItem={searchItem}
        setData={setData}
        setSearchItem={setSearchItem}
      />
      <Hero
        selectedMovie={selectedMovie}
        videos={videos}
        playTrailer={playTrailer}
        setPlayTrailer={setPlayTrailer}
      />
      <Movies
        data={data}
        count={count}
        setCount={setCount}
        genres={genres}
        setSelectedMovie={setSelectedMovie}
        setPlayTrailer={setPlayTrailer}
        searchCount={searchCount}
        setSearchCount={setSearchCount}
      />
    </div>
  );
}

export default App;
