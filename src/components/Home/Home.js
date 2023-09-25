import React from "react";
import "./home.scss";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import projector from "../assets/projector.png";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <div className="header">
          <h1>Movie Collections</h1>
        </div>
        <div className="search-content">
          <div className="search">
            <div className="heading">
              <img src={projector} alt="" />
              <h1>WELCOME</h1>
              <h2>Millions of Movies to discover. Explore Now.</h2>
            </div>
          </div>
          <div className="footer">
            <Link to="/searchMovie" className="footer-link">
              <p>Search Movies</p>
              <p>
                <FaAngleDoubleDown />
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
