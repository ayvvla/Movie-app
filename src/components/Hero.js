import React from "react";
import Youtube from "react-youtube";

const Hero = ({ selectedMovie, videos, playTrailer, setPlayTrailer }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";

  const trailer = videos.find(vid => vid.name.includes("Trailer"))

  const handlePlay = () => {
    setPlayTrailer(!playTrailer)
  }

  return (
    <div
      className="hero darken"
      style={{
        color: "white",
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)
        ),
        url(${IMAGE_PATH}${selectedMovie.backdrop_path})`,
      }}
    >
      <div className="hero--content">
        {trailer && playTrailer ? <button className="btn close" onClick={() =>setPlayTrailer(false)}>Close</button> : null}
          { trailer && playTrailer &&
            <Youtube 
              videoId={trailer.key}
              iframeClassName="youtube_player"
              opts={{
                width : "100%",
                height : "100%",
                playerVars : {
                  autoplay : 1,
                  controls: 0
                }
              }}
          /> 
          }
        <button className="btn play" onClick={handlePlay}>Play Trailer</button>
        <div className="hero--title">
          <h2 className="hero--title__head">{selectedMovie.title}</h2>
          <div className="small">
            <small>{selectedMovie.vote_average}</small> / <small>10</small>
          </div>
        </div>
        <p className="hero--text">{selectedMovie.overview}</p>
      </div>
    </div>
  );
};

export default Hero;
