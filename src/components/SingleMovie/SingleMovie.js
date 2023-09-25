import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./singleMovie.scss";
import { AiFillStar } from "react-icons/ai";

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState({});
  const [error, setError] = useState({ show: false, msg: "" });

  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      let res = await fetch(url);
      let data = await res.json();

      setMovies(data);
      setIsLoading(false);
      // console.log(data);
    } catch (error) {
      // console.error(error);
      setError({ show: true, msg: error.message });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getMovie(MOVIE_URL);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <>
        <div className="loading-movie">
          <div className="loading-word">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="single-container">
        <div className="movie">
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            />
          </div>
          <div className="desc">
            <div className="title">
              <h1>{movies.title}</h1>
            </div>
            <div className="genre">
              {movies.genres.map((genre) => genre.name).join(" / ")}
            </div>
            <div className="date">
              <p>
                <span>Release</span> : {movies.release_date}
              </p>
              <p className="rating">
                <span>
                  <AiFillStar />
                </span>
                {`${movies.vote_average.toFixed(1)} / 10`}
              </p>
            </div>
            <div className="runtime">
              <p>
                <span>Runtime</span> : {`${movies.runtime} min`}
              </p>
              <p>
                {" "}
                <span>Languages</span> :{" "}
                {movies.spoken_languages.map((lan) => lan.name).join(", ")}
              </p>
            </div>
            <div className="tagline">
              <p>
                <span>Tagline</span> : {movies.tagline}
              </p>
            </div>
            <div className="overview">
              <p>
                <span>OverView</span> : {movies.overview}
              </p>
            </div>
            <div className="buttons">
              <NavLink to="/searchMovie">
                <button>Go Back</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
