import React from "react";
import Movie from "./Movie";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const Movies = ({ data, count, setCount, genres, setSelectedMovie,searchCount, setSearchCount }) => {
  const handleNext = () => {
    setCount(count + 1);
    setSearchCount(searchCount + 1)
  };
  const handlePrev = () => {
    setCount(count - 1)
    setSearchCount(searchCount - 1)
  }
  return (
    <div className="movie--container">
      {data.map((element) => {
        return (
          <Movie
            element={element}
            image={element.poster_path}
            title={element.title}
            key={element.id}
            description={element.overview}
            genre_ids={element.genre_ids}
            genres={genres}
            setSelectedMovie={setSelectedMovie}
          />
        );
      })}
      <div className="page--navi">
        <GrFormPreviousLink size="2em" className="previous" onClick={handlePrev}/>
        Page {count}
        <GrFormNextLink className="next" onClick={handleNext} size="2em" />
      </div>
    </div>
  );
};

export default Movies;
