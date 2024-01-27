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
}) => {
  return (
    <div className="">
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 my-8">
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
