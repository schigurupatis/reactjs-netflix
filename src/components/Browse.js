import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoContainer from "./VideoContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
  // const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()
  useUpComingMovies()

  

  return (
    <>
      <div className="relative">
        <Header />
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

        <VideoContainer />
        <MainContainer />
        {/* {nowPlayingMovies && movie.title}  */}
        {/* {movie.title} */}


        
        <Footer />
      </div>
    </>
  );
};

export default Browse;
