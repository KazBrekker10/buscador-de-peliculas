import {useState, useEffect} from 'react';
export function useQueryControl({query}){
    const [currentQuery, setQuery] = useState(query);
    const [error,setError] = useState(null);
    useEffect(()=>{
        if (!query) return;
        
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

    return [currentQuery,error]
}