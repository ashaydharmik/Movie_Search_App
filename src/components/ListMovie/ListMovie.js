import React from 'react'
import "./listMovie.scss"
import { useGlobal } from '../Context/Context'
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
const ListMovie = () => {

const {movies,isLoading} = useGlobal();

if(isLoading){
  return(
    <>
      <Search/>
    <div className='loading-container'>
      <div className='loading'>
        loading...
      </div>
    </div>
    </>
  );
}
  return (

    <>
      
    <Search/>
    <section className='listMovie-container'>
      <div className='movie-list'>
      {
        movies.map((curMovie)=>{
          const {poster_path, title, id} = curMovie;
          const movieName = title.substring(0, 20);
          return(

           <NavLink to={`/singleMovie/${id}`} key={id}>
            <div className='card'>
              <div className='card-info'>
              <h1>{title.length > 20 ? `${movieName}...` : movieName}</h1>
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='' />
              </div>
            </div>
           </NavLink>

          )
        })
      }
      </div>
    </section>
    </>
  )
}

export default ListMovie
