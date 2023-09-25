import React from "react";
import "./search.scss";
import { useGlobal } from "../Context/Context";
const Search = () => {
  const { query, setQuery, error } = useGlobal();

  return (
    <>
      <section className="search">
        <div className="heading">
          <h1>WELCOME</h1>
          <h2>Search your favorite movie...</h2>

          <div className="search-bar">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="errorBox">
            <p> {error.show && error.msg} </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
