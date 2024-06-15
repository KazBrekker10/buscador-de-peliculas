import { useState, useEffect } from "react";

export function useMovies(movie){
    const [movieList,setMovieList] = useState([])
    useEffect(()=>{
      if (!movie) return;
      fetch(`https://www.omdbapi.com/?apikey=c661f91c&s=${movie}`)
            .then(response=>response.json())
            .then(data=> {
              const {Search} = data;
              const movies = Search.map(movie=> {return  {title : movie.Title, year : movie.Year, poster : movie.Poster, id: movie.imdbID  }})
              setMovieList([...movies])
              
            })
      }
    ,[movie])
    return {movies: movieList}
  }