import React, { Component } from "react";
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state={
    isLoding: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({ movies, isLoding: false });
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoding } = this.state;
    return (<section class="movies">

      {isLoding ? (
        <div class="loader">
          <span class="loader__text">Loding...</span>
        </div>) : (
          <div class="movies">
            {
              movies.map(movie =>(
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                tilte={movie.tilte}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />))}
          </div>
        )}
    </section>
    );
  };
}

export default App;