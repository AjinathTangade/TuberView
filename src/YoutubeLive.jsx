import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/HomePage/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFireFlameCurved, faRocket, faClock, faTv, faGauge } from "@fortawesome/free-solid-svg-icons";

const MediaList = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [discoverTV, setDiscoverTV] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);

  // console.log("test", trendingMovies);
  const moviesCategories = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faHouse} />,
      href: "discover",
      text: "Discover",
      current: true,
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faFireFlameCurved} />,
      href: "#",
      text: "Popular",
      current: false,
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faRocket} />,
      href: "#",
      text: "Top Rated",
      current: false,
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faClock} />,
      href: "#",
      text: "Upcoming",
      current: false,
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={faTv} />,
      href: "#",
      text: "TV Show",
      current: false,
    },
    {
      id: 6,
      icon: <FontAwesomeIcon icon={faGauge} />,
      href: "#",
      text: "Trending",
      current: false,
    },
  ];

  const categories = [
    "now_playing",
    "popular",
    "top_rated",
    "upcoming",
    "discover/movie",
    "discover/tv",
    "trending/week",
  ];
  const languages = [
    "hi-IN",
    "en-US",
    "es-ES",
    "fr-FR",
    "de-DE",
    "it-IT",
    "ja-JP",
    "zh-CN",
  ];

  // Function to fetch person details
  const fetchPersonDetails = async (personId, language) => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/person/${personId}`;
      const response = await axios.get(`${apiUrl}?api_key=4c0df27ef7d50e86fb6bbc69638588c2&language=${language}`);

      // Process and handle the response as needed
      console.log(`Person details for person ID ${personId}:`, response.data);
    } catch (error) {
      console.error(`Error fetching person details for person ID ${personId} and language ${language}`, error);
      setError(`Error fetching person details for person ID ${personId} and language ${language}`);
    }
  };


  useEffect(() => {
    const fetchMediaByCategory = async (category, language) => {
      try {
        let apiUrl;

        switch (category) {
          case "now_playing":
            apiUrl = "https://api.themoviedb.org/3/movie/now_playing";
            break;
          case "popular":
            apiUrl = "https://api.themoviedb.org/3/movie/popular";
            break;
          case "top_rated":
            apiUrl = "https://api.themoviedb.org/3/movie/top_rated";
            break;
          case "upcoming":
            apiUrl = "https://api.themoviedb.org/3/movie/upcoming";
            break;
          case "discover/movie":
            apiUrl = "https://api.themoviedb.org/3/discover/movie";
            break;
          case "discover/tv":
            apiUrl = "https://api.themoviedb.org/3/discover/tv";
            break;
          case "trending/week":
            apiUrl = "https://api.themoviedb.org/3/trending/all/week";
            break;
          default:
            return;
        }

        const response = await axios.get(
          `${apiUrl}?api_key=4c0df27ef7d50e86fb6bbc69638588c2&language=${language}`
        );

        const mediaWithLanguagePrefix = response.data.results.map((item) => ({
          ...item,
          key: `${language}_${item.id}`,
        }));

        switch (category) {
          // ... (existing cases for updating state based on category)
          case "now_playing":
            setNowPlayingMovies((prevMedia) => [...prevMedia, ...mediaWithLanguagePrefix]);
            break;
          case "popular":
            setPopularMovies((prevMedia) => [...prevMedia, ...mediaWithLanguagePrefix]);
            break;
          case "top_rated":
            setTopRatedMovies((prevMedia) => [...prevMedia, ...mediaWithLanguagePrefix]);
            break;
          case "upcoming":
            setUpcomingMovies((prevMedia) => [...prevMedia, ...mediaWithLanguagePrefix]);
            break;
          case "discover/movie":
            setDiscoverMovies((prevMedia) => [...prevMedia, ...mediaWithLanguagePrefix]);
            break;
          case "discover/tv":
            setDiscoverTV((prevMedia) => [...prevMedia, ...mediaWithLanguagePrefix]);
            break;
          case "trending/week":
            setTrendingMovies((prevMedia) => [...prevMedia, ...mediaWithLanguagePrefix]);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(`Error fetching ${category} for ${language}`, error);
        setError(`Error fetching ${category} for ${language}`);
      }
    };

    const fetchAllMedia = async () => {
      try {
        setLoading(true);
        setError(null);

        for (const category of categories) {
          for (const language of languages) {
            await fetchMediaByCategory(category, language);
          }
        }
        // Fetch person details for a specific person ID and language
        const personId = 123; // Replace with the actual person ID
        const personLanguage = "en-US"; // Replace with the desired language code
        await fetchPersonDetails(personId, personLanguage);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching media data", error);
        setError("Error fetching media data");
      }
    };

    fetchAllMedia();
  }, []);

  return (
    <div>
      <div className="">
        <div className="mx-auto w-96 flex justify-center items-center flex-col ">
          {loading && <div className="w-12 h-12 rounded-full animate-spin
              border-y-8 border-solid border-purple-500 border-t-transparent "></div>}
          {error && <p>{error}</p>}
        </div>

        {!loading && !error && (
          <Home
            nowPlayingMovies={nowPlayingMovies}
            popularMovies={popularMovies}
            topRatedMovies={topRatedMovies}
            upcomingMovies={upcomingMovies}
            discoverMovies={discoverMovies}
            discoverTV={discoverTV}
            moviesCategories={moviesCategories}
            trendingMovies={trendingMovies}
          />
        )}
      </div>
    </div>
  );
};

export default MediaList;
