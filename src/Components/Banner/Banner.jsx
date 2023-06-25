import React, { useEffect, useState } from 'react';
import request from '../../../src/Request'
import axios from 'axios';
const Banner = () => {
  const [movies , setMovies] = useState([])
  const movie = movies[Math.floor(Math.random()*movies.length)]
  useEffect(()=>{
    axios.get(request.requestPopular)
    .then((res)=>{
      setMovies(res.data.results)
    })
  },[])

  console.log(movie)

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'>

        </div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>

        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;