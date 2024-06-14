export function handleSubmit(event){
    event.preventDefault();
    const { query } = Object.fromEntries(new FormData(event.target));
    return query
    
  }
  export function handleChange(event){
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return ""; 
    return newQuery;
  }