import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {

 async  function deletemovie(){
    console.log(props.id);
try{
await fetch(`https://react-box-58c06-default-rtdb.firebaseio.com/movies/${props.id}.json`,{
   method:'DELETE'
});
console.log("delete success");
// props.fetchMovieHandler();
}
catch(error){
    console.log('error');
}  
}

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deletemovie}>DELETE</button>
    </li>
  );
};

export default Movie;
