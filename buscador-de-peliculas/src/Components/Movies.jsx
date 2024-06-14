import { MovieItem } from "./MovieItem";

function ListOfMovies({ movies }){
    return (
        <ul className='grid grid-cols-4 gap-4 px-6  [&>div>div]:text-black'>
      {movies.sort((a,b)=> a.year - b.year).map(movie=>{

        return (
          <MovieItem movie ={movie}/>
        )
      })}
      </ul>
    )
}
 function NoMoviesResult(){
    return (
        <p>No se encontraron peliculas para este busqueda</p>
    )
}

 export function Movies({movies}){
    const hasMovies = movies.length > 0
    return(
        hasMovies? <ListOfMovies movies={movies}/> : <NoMoviesResult/>
    )
}