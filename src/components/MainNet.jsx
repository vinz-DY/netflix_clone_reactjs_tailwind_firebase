import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const MainNet = () => {
  const [movies, setMovies] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestsPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-[500px] h-[550px] bg-gradient-to-r from-black"></div>
        {movie && (
          <img
            onLoad={handleImageLoad}
            className={`h-full w-full object-cover ${
              imageLoaded ? "" : "hidden"
            }`}
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
        )}
      </div>
    </section>
  );
};

export default MainNet;
