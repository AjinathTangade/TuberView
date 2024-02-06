import React from "react";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import Cta from "../CTA/Cta";

const Home = ({
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  discoverMovies,
  discoverTV,
  moviesCategories,
  trendingMovies,
}) => {
  return (
    <div className="">
      <NavBar />
      <div className="mx-auto px-6 my-8 relative top-20">
        <div className="flex gap-10">
          <div className="hidden md:block w-5/12">
            <Sidebar moviesCategories={moviesCategories} />
          </div>

          <div className="">
            <Cta
              newDiscover={nowPlayingMovies}
              popularMovies={popularMovies}
              topRatedMovies={topRatedMovies}
              upcomingMovies={upcomingMovies}
              discoverMovies={discoverMovies}
              discoverTV={discoverTV}
              trendingMovies={trendingMovies}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
