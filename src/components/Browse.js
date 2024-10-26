import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoContainer from "./VideoContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()
  useUpComingMovies()

  

  return (
    <>
      <div className="relative">

        <Header />
        {
          showGptSearch ? (
            <GPTSearch />
          ) : (
            <>
              <VideoContainer />
              <MainContainer />
            </>
          )
        }

        {/*         
          VideoContainer
            - BackgroundTrailer
            - Title
          MainContainer
            - VideosList(Trending)
              - VideoCard
            - VideosList(Popular)
              - VideoCard
         */}

        
        {/* {nowPlayingMovies && movie.title}  */}
        {/* {movie.title} */}


        
        <Footer />
      </div>
    </>
  );
};

export default Browse;
