import React from "react";
import PropTypes from 'prop-type';
import './App.css';

function Movie({title,year,summary,poster,genres}){
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
        <ul className="movie__genres">
          {genres.map((genre,index)=>{
            return <li key={index} className="movie__genres">{genre}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

Movie.protoTypes = {
  year: protoTypes.number.isRequired,
  title: protoTypes.string.isRequired,
  summary: protoTypes.string.isRequired,
  poster: protoTypes.string.isRequired,
  genres: PropTypes.arrayOf(protoTypes.string).isRequired,
};

export default Movie;