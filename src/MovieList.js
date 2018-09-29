import React, { Component } from 'react';
import UsersList from './UsersList';

class MovieList extends Component {
  render() {
    const moviesList = this.props.moviesList;
    
    return (
      <ul>
      { moviesList.map(movie => {
        	if(movie.likedBy.length) {
              return (
                <div key={movie.id}>
                    <h2>{movie.name}</h2>
                    <UsersList usersList={movie.likedBy}/>
                </div>
              );
            }
              return (
                 <div key={movie.id}>
                    <h2>{movie.name}</h2>
                    <p>None of the current users liked this movie</p>
                 </div>
              )
	     })
	}
      </ul>
    );
  }
}

export default MovieList;