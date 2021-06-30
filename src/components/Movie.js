import React from 'react';

const Movie = (props) => {
    const {movie}=props;
    const impath ='https://image.tmdb.org/t/p/w1280';
    const setVoteColor =(vote) => {
            if (vote>=8){
                return 'green'
            }
            else{
                return 'red'
            }
    };
    return (
        <div className="movie">
            <img src ={impath + movie.poster_path}></img>
            <div className="data-container">
                <ul>
                    <li>Description : </li>
                    <li>{movie.overview}</li>   
                </ul> 
            </div>  
            <div className="name-container">
                <h3>{movie.original_title}</h3>
                <span className={setVoteColor(movie.vote_average)}>{movie.vote_average}</span>
            </div>         
        </div>   
        
    );
};

export default Movie;