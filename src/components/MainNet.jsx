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
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
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
        {imageLoaded && movie && (
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainNet;
