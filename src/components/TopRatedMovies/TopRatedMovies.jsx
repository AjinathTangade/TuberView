import React from 'react';
import { useState } from 'react';

function TopRatedMovies({ topRatedMovies, upcomingMovies }) {
  const [showtopRatedMovies, setShowtopRatedMovies] = useState(true);
  const displayedData = showtopRatedMovies ? topRatedMovies : upcomingMovies;


  const handleToggle = () => {
    setShowtopRatedMovies(!showtopRatedMovies);
  };
  const backgroundStyle = {
    backgroundImage: 'url("./bk.svg")',
    backgroundPosition: 'bottom',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    // transform: 'rotate(45deg)',
  };
  function MovieCard({ movie }) {
    console.log(movie)
    return (

      <div className="">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "./default_img.png"
          }
          alt={`${movie.title} Poster`}
          className="max-w-36 rounded-lg"
        />
        <div className="relative">
          <div className="flex justify-center items-center h-10 w-10 bg-gray-900 border-2 border-emerald-700 rounded-full absolute top-[-20px] left-3">
            <span className="text-white text-sm font-semibold">
              {Math.round(movie.vote_average)}0%
            </span>
          </div>
          <div className="p-4">
            <div className="">
              <h2 className="mt-2 text-sm">{movie.title}</h2>
            </div>
            <div>
              <span className="">
                {movie.release_date}
              </span>
            </div>
          </div>

        </div>

      </div>
    );
  }
  return (
    <div>
      <div>
        <div className='flex gap-5 pb-7'>
          <h2 className="text-3xl font-bold">Trending</h2>
          <label className="relative inline-flex items-center cursor-pointer border border-teal-700 rounded-full">
            <input type="checkbox" value="" className="sr-only peer" onChange={handleToggle} />
            <div className="w-80 h-7 bg-gray-200 border-red peer-focus:outline-none rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray-200 after:content-[''] after:absolute after:top-0 after:start-0 after:bg-emerald-700 after:text-white after:border-gray-300 after:border after:rounded-full after:h-[34px] after:w-40 after:transition-all dark:border-emerald-700 ">
            </div>
            <div className='absolute left-0'>
              <span className='mx-5 text-md z-40 '>Top Rated Movies</span>
              <span className='text-md'>Up Coming Movies</span>
            </div>
          </label>
        </div>

        {/* Display data based on the selected option */}
        <div>
          <div className="mt-2" style={backgroundStyle}>
            <div className="overflow-x-auto">
              <div className="flex gap-5 mb-5">
                {displayedData.slice(0, 20).map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopRatedMovies;