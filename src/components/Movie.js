import React from "react";

const Movie = ({
  title,
  image,
  description,
  genres,
  genre_ids,
  element,
  setSelectedMovie,
  setPlayTrailer,
  setId
}) => {

  function movieGenre(genre_ids) {
    let genreIds = []
    let genreNames = []
    let theGenre = ""
    genres.forEach((item, index) => {
      genreIds[index] = item.id;
      genreNames[index] = item.name
    })

    genre_ids.forEach((genre) => {
      let genreIndex = genreIds.indexOf(genre)
      let genreName = genreNames[genreIndex]
      theGenre += genreName + ' . ' 
    })
    return theGenre

  }
  return (
    <>
      <div
        className="movie--card"
        onClick={() => {
          setSelectedMovie(element);
          window.scrollTo(0, 0);
          setId(element.id)
        }}
      >
        <div className="img--container">
          <img
            src={`http://image.tmdb.org/t/p/w500/${image}`}
            alt="movie poster"
            className="movie--image"
          />
        </div>
        <h2 className="movie--title">{title}</h2>
        <p className="movie--genre">{movieGenre(genre_ids)}</p>
      </div>
      
    </>
  );
};

export default Movie;
