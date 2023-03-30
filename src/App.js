import React, { useEffect, useState ,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import InputForm from './components/InputForm';

function App() {
  const [movies,setMovies]=useState([]);
const[isLoading,setIsLoading]=useState(false);
const[error,setError]=useState();
function stopRetrying(){
setIsLoading(false);
}
 
  const fetchMovieHandler=useCallback(async() =>{
    console.log('bhjcb');
    setIsLoading(true);
    try{
 const response=await fetch('https://react-box-58c06-default-rtdb.firebaseio.com/movies.json')
     const data=await response.json();
 if(!response.ok)
 {
  throw new Error('Something went Wrong......retrying');
 }
 for(const key in data){
  console.log(data[key]);
  let obj=data[key];
obj={...obj,id:key}
    setMovies((prev)=>[...prev,obj]);
           setIsLoading(false);
    }
  }
  catch(error){
    setError(error.message);
    setTimeout(fetchMovieHandler,5000);
  }

  },[])

useEffect(()=>{
    fetchMovieHandler();
  },[])

 
  return (
    <React.Fragment>
      <InputForm fetchMovieHandler={fetchMovieHandler}/>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
     {!isLoading && movies.length>0 && <MoviesList movies={movies} fetchMovieHandler={fetchMovieHandler}/>}
     {isLoading && error && 
     <>
     <p>isLoading .... {error} <AiOutlineLoading3Quarters/></p>
     <button onClick={stopRetrying}>Stop</button>
     </>}
      </section>
    </React.Fragment>
  );
}

export default App;

