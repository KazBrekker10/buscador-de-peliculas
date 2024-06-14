Crea una aplicacion para buscar peliculas
API a usar:
- https://www.omdbapi.com/
- API_KEY : c661f91c
- URL + API_KEY + &s + titulo:  http://www.omdbapi.com/?apikey=c661f91c&s=batman
Requerimientos:
- Necesita mostrar un input para buscar la pelicula y un boton
- Lista de peliculas encontrados y muestra el titulo, año y poster
- Has que la lista se muestre en un grid responsivo

Primera iteracion:
- Evitar que se haga la misma busqueda dos veces seguidas
- Haz que la busqueda se haga automaticamente al escribir
- Evita que la busqueda se haga continuamente al escribir (debounce)