import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    // console.log("nowplaying", nowPlayingMovies)
    const popularMovies = useSelector(store => store.movies.popularMovies)
    //console.log("popular", popularMovies)
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
    //console.log("toprated", topRatedMovies)
    const upComingMovies = useSelector(store => store.movies.upComingMovies)
    //console.log("upcoming", upComingMovies)

  return <div className="w-full] mx-auto px-8 bg-black text-white">
    {/* 
      MovieList - Now Playing
      MovieList - Popular
      MovieList - Top Rated
      MovieList - Up Coming
      MovieList - Horror
    
    */}

      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Up Coming"} movies={upComingMovies} />

    </div>;
};

export default MainContainer;
