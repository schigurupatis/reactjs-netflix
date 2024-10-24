import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const VideoContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  if(movies === null) return;
  // if(!movies) return;

  const mainMovie = movies[0];
  //console.log("Main Movie is: ", mainMovie)

  const {original_title, overview, id} = mainMovie;

  return (
  <>
    <VideoTitle title={original_title} overview={overview} />
    <VideoBackground movieId={id} />
  </>
  );
};

export default VideoContainer;
