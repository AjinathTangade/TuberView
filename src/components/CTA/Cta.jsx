import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEye,
  faCalendarDays,
  faHeart,
  faStar,
  faBookmark,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import Toggle from "./Toggle";

function truncateText(text, maxLength) {
  if (!text) return "";
  const words = text.split(" ");
  const truncatedWords = words.slice(0, maxLength);
  return truncatedWords.join(" ");
}

function Cta({
  newDiscover,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  discoverMovies,
  discoverTV,
  trendingMovies,
}) {
  const [randomIndex, setRandomIndex] = useState(null);
  const [randomItem, setRandomItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const newIndex = Math.floor(Math.random() * newDiscover.length);
    setRandomIndex(newIndex);
    setRandomItem(newDiscover[newIndex]);
  }, [newDiscover]);

  useEffect(() => {
    if (randomItem) {
      setIsLoading(false);
    }
  }, [randomItem]);

  //console.log(randomItem);

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

  const backgroundStyle = {
    backgroundImage: 'url("./bk.svg")',
    backgroundPosition: 'bottom',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    // transform: 'rotate(45deg)',
  };


  return (
    <div className="w-full">
      <div className="grid grid-cols-1">
        <div>
          <div>
            {isLoading ? (
              <div
                className="w-12 h-12 rounded-full animate-spin
              border-y-8 border-solid border-purple-500 border-t-transparent"
              ></div>
            ) : (
              randomItem && (
                <div>
                  <div className="relative h-[500px]">
                    {randomItem ? (
                      <div>
                        <img
                          src={
                            randomItem.backdrop_path
                              ? `https://image.tmdb.org/t/p/w500${randomItem.backdrop_path}`
                              : "./default_img.png"
                          }
                          alt={`${randomItem.title} Poster`}
                          className="rounded-lg h-[500px] w-full object-fill"
                        />
                        <div className="absolute inset-0 bg-[#000000e0] bg-opacity-50 rounded-lg">
                          <div className="flex gap-8 my-auto h-full p-5">
                            <div className="">
                              <img
                                src={
                                  randomItem.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${randomItem.poster_path}`
                                    : "./default_img.png"
                                }
                                alt={`${randomItem.title} Poster`}
                                className="rounded-lg object-fill h-full max-w-68 max-w-min"
                              />
                            </div>
                            <div className="">
                              <h2 className="text-white text-4xl font-bold">
                                {randomItem.original_title}
                              </h2>
                              <div className="flex gap-5 mt-5">
                                <div className="flex gap-3">
                                  <span>
                                    <FontAwesomeIcon
                                      icon={faCalendarDays}
                                      className="text-white"
                                    />
                                  </span>
                                  <span className="text-white">
                                    {randomItem.release_date}
                                  </span>
                                </div>
                                <div className="flex gap-2">
                                  <span>
                                    <FontAwesomeIcon
                                      icon={faEye}
                                      className="text-white"
                                    />
                                  </span>
                                  <span className="text-white">
                                    ({randomItem.original_language})
                                  </span>
                                </div>
                                <div className="flex gap-2">
                                  <span>
                                    <FontAwesomeIcon
                                      icon={faThumbsUp}
                                      className="text-white"
                                    />
                                  </span>
                                  <span className="text-white">
                                    {randomItem.vote_count}
                                  </span>
                                </div>
                              </div>
                              <div className="flex gap-3 items-center">
                                <div className="flex gap-3 items-center">
                                  <div className=" flex justify-center items-center h-16 w-16 bg-gray-900 border-4 border-emerald-700 rounded-full my-3">
                                    <span className="text-white text-2xl font-semibold">
                                      {Math.round(randomItem.vote_average)}0%
                                    </span>
                                  </div>
                                  <p className="text-white text-lg font-semibold">
                                    User Score
                                  </p>
                                </div>
                                <div className="flex gap-3">
                                  <div>
                                    <div className="h-10 w-10 bg-gray-900 flex justify-center items-center rounded-full">
                                      <FontAwesomeIcon
                                        icon={faList}
                                        className="text-white"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="h-10 w-10 bg-gray-900 flex justify-center items-center rounded-full">
                                      <FontAwesomeIcon
                                        icon={faHeart}
                                        className="text-white"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="h-10 w-10 bg-gray-900 flex justify-center items-center rounded-full">
                                      <FontAwesomeIcon
                                        icon={faStar}
                                        className="text-white"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="h-10 w-10 bg-gray-900 flex justify-center items-center rounded-full">
                                      <FontAwesomeIcon
                                        icon={faBookmark}
                                        className="text-white"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h3 className="text-white font-semibold">
                                  Overview
                                </h3>
                                <p className="text-md text-gray-200">
                                  {/* {randomItem.overview?randomItem.overview:"Millions of movies, TV shows and people to discover. Explore now"} */}
                                  {truncateText(randomItem.overview, 50)
                                    ? truncateText(randomItem.overview, 15)
                                    : "Millions of movies, TV shows and people to discover. Explore now"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p>Loading..</p>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="my-10">
          <div id="discover" style={backgroundStyle}>
            <h2 className="text-3xl font-bold mb-8">Discover</h2>
            <div className="overflow-x-auto">
              <div className="flex gap-5">
                {newDiscover.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10" style={backgroundStyle}>
            <h2 className="text-3xl font-bold mb-8">Top Rated Movies</h2>
            <div className="overflow-x-auto">
              <div className="flex gap-5">
                {topRatedMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10" style={backgroundStyle}>
            <h2 className="text-3xl font-bold mb-8">Upcoming Movies</h2>
            <div className="overflow-x-auto">
              <div className="flex gap-5 mb-5">
                {upcomingMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10" style={backgroundStyle}>
            <h2 className="text-3xl font-bold mb-8">Discover TV</h2>
            <div className="overflow-x-auto">
              <div className="flex gap-5 mb-6">
                {discoverTV.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10" style={backgroundStyle}>
            <h2 className="text-3xl font-bold mb-8">Discover Movies</h2>
            <div className="overflow-x-auto">
              <div className="flex gap-5 mb-5">
                {discoverMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10" style={backgroundStyle}>
            <h2 className="text-3xl font-bold mb-8">Discover Movies</h2>
            <div className="overflow-x-auto">
              <div className="flex gap-5 mb-5">
                {trendingMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
<Toggle 
trendingMovies={trendingMovies}
newDiscover={newDiscover}
/>

        </div>
      </div>
    </div>
  );
}

export default Cta;
