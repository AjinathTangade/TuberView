import React from 'react';
import { useState } from 'react';
function Toggle({ newDiscover, trendingMovies }) {
    const [showNewDiscover, setShowNewDiscover] = useState(true);
    const displayedData = showNewDiscover ? newDiscover : trendingMovies;

    const handleToggle = () => {
        setShowNewDiscover(!showNewDiscover);
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
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onClick={handleToggle} />
                    <div className="w-64 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:start-0 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-32 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">



                    </div>
                    <div className='absolute left-0'>
                        <span className='mx-5 text-md z-40'>New Discover</span>
                        <span className='text-md'>Trending Movies</span>
                    </div>
                </label>
                <div>

                </div>

                {/* Display data based on the selected option */}
                <div>
                    
                        <div className="mt-10" style={backgroundStyle}>
                        <h2 className="text-3xl font-bold mb-8">Discover Movies</h2>
                        <div className="overflow-x-auto">
                          <div className="flex gap-5 mb-5">
                            {displayedData.map((movie) => (
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

export default Toggle