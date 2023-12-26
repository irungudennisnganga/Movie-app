import React from 'react'
import "./Card.css"
function Card({movies}) {

  return (
    <div className='card'>
      
        {
          movies.map(movie =>{
            return <div  key={movie.id}>
                      <img src={movie.image} alt={movie.title} />
                      <h3>Title : {movie.title}</h3>
                      <h4>Price : {movie.price}</h4>
                      <p>Description : {movie.description}</p>
                      <button >ADD MOVIE</button>
                   </div>
          })
        }
      
    </div>
  )
}

export default Card
