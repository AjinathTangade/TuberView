import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faEye, faCalendarDays, faHeart, faStar, faBookmark, faList } from "@fortawesome/free-solid-svg-icons";

function truncateText(text, maxLength) {
  if (!text) return "";
  const words = text.split(" ");
  const truncatedWords = words.slice(0, maxLength);
  return truncatedWords.join(" ");
}

function MovieCard({ movie }) {
  return (
    <div className="mb-6 mx-3">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "./default_img.png"
        }
        alt={`${movie.title} Poster`}
        className="max-w-36 rounded-lg"
      />
      <h2 className="mt-2 text-sm">{movie.title}</h2>
      <p className="text-xs">
        {truncateText(movie.overview, 20)}
      </p>
    </div>
  );
}

function Cta({
  newDiscover,
  // popularMovies,
  // topRatedMovies,
  // upcomingMovies,
  // discoverMovies,
  // discoverTV
}) {
  const [randomIndex, setRandomIndex] = useState(null);
  const [randomItem, setRandomItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  console.log(randomItem)

  return (
    <div className="">
      <div className="grid grid-cols-1">
        <div>
          <div>
            {isLoading ? (
              <div className="w-12 h-12 rounded-full animate-spin
              border-y-8 border-solid border-purple-500 border-t-transparent"></div>
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
                        <div className="absolute inset-0 bg-[#000000c9] bg-opacity-50 rounded-lg">
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
                                  <span><FontAwesomeIcon icon={faCalendarDays} className="text-white" /></span>
                                  <span className="text-white">{randomItem.release_date}</span>
                                </div>
                                <div className="flex gap-2">
                                  <span><FontAwesomeIcon icon={faEye} className="text-white" /></span>
                                  <span className="text-white">({randomItem.original_language})</span>
                                </div>
                                <div className="flex gap-2">
                                  <span><FontAwesomeIcon icon={faThumbsUp} className="text-white" /></span>
                                  <span className="text-white">{randomItem.vote_count}</span>
                                </div>
                              </div>
                              <div className="flex gap-3 items-center">
                                <div className="flex gap-3 items-center">
                                  <div className=" flex justify-center items-center h-16 w-16 bg-gray-900 border-4 border-emerald-700 rounded-full my-3">
                                    <span className="text-white text-2xl font-semibold">{Math.round(randomItem.vote_average)} %</span>
                                  </div>
                                  <p className="text-white text-lg font-semibold">User Score</p>
                                </div>
                                <div className="flex gap-3">
                                  <div>
                                    <div className="h-10 w-10 bg-gray-900 flex justify-center items-center rounded-full">
                                      <FontAwesomeIcon icon={faList} className="text-white" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="h-10 w-10 bg-gray-900 flex justify-center items-center rounded-full">
                                      <FontAwesomeIcon icon={faHeart} className="text-white" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="h-10 w-10 bg-gray-900 flex justify-center items-center rounded-full">
                                      <FontAwesomeIcon icon={faStar} className="text-white" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="h-10 w-10 bg-gray-900 flex justify-center items-center rounded-full">
                                      <FontAwesomeIcon icon={faBookmark} className="text-white" />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h3 className="text-white font-semibold">Overview</h3>
                                <p className="text-md text-gray-200">
                                  {/* {randomItem.overview?randomItem.overview:"Millions of movies, TV shows and people to discover. Explore now"} */}
                                  {truncateText(randomItem.overview, 50) ? truncateText(randomItem.overview, 15) : "Millions of movies, TV shows and people to discover. Explore now"}
                                </p>
                              </div>


                            </div>
                          </div>

                        </div>
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 ml-3">Discover</h2>
          <div className="flex justify-between overflow-x-scroll">
            {newDiscover.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
