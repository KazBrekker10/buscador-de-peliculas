import './App.css'
import { Movies } from './Components/Movies';
import {useMovies} from './Hooks/useMovies';
import {useState, useRef, useEffect} from 'react';
import { handleSubmit,handleChange } from './logic/eventHandlers';

function App() {
  const [search, setSearch] = useState("")
  const [query,setQuery] = useState("");
  const [error,setError] = useState(null);
  const {movies} = useMovies(search);

  useEffect(()=>{
    if (query === ""){
      setError("no se puede dejar espacio vacio");
      return;
    }
    if (query.match(/^\d+$/)){
      setError("no se puede incluir numeros");
      return;
    }
    if (query.length<3){
      setError("la pelicula debe tener al menos 3 caracteres")
      return;
    }
    setError(null)
  },[query])

  
  return (
    <div>
      <header className='flex flex-col items-center gap-y-2 py-8'>
        <h1 className='text-3xl font-bold'>Buscador de peliculas</h1>
        {query && <h2>Pelicula buscada: {query}</h2>}
        <form className='form' onSubmit={event=>{
          const newQuery = handleSubmit(event)
          setQuery(newQuery);
          setSearch(newQuery);
        }}>
          <input name="query" value={query} placeholder='Avengers, Star Wars, The Matrix...' className='p-2 text-black rounded-md' onChange={event=>{
            setQuery(handleChange(event))
          }}/>
          <button className='bg-cyan-700 px-4 py-2 rounded-md' >Buscar</button>
        </form>
        {error&&<p style={{color:"red"}}>{error}</p>}
      </header>
      <main>
        <section>
          <Movies movies={movies}/>
        </section>
      </main>
    </div>
    )}
export default App
