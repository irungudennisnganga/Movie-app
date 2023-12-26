import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../components/Card'




function Home() {
  const [data ,setdata] = useState([])

  useEffect(() =>{
      fetch('http://localhost:4000/movies')
      .then(response => response.json())
      .then(movies =>  setdata(movies))
  },[data]);
  
  return (
    <div>
      <Card movies={data} />
    </div>
  )
}

export default Home
