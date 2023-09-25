import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

export const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;


const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("");

  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;

  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      let res = await fetch(url);
      let data = await res.json();

      if (data.results.length === 0) {
        throw new Error("Movie not found!!! try again");
      }else{
        setError({ show: false, msg: "" });
      }
  
      // console.log(data);
      setIsLoading(false);
      setMovies(data.results);
    } catch (error) {
      // console.error(error);
      setError({ show: true, msg: error.message });
    }
  };
  
  
  
  useEffect(() => {
    let timer = setTimeout(() => {
      if (query) {
        const searchUrlWithQuery = `${SEARCH_URL}&s=${query}`;
        getMovies(searchUrlWithQuery);
      } else {
        getMovies(API_URL);
      }
    }, 800);
    return ()=> clearTimeout(timer);
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        movies,
        error,
        query,
        setQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobal };
