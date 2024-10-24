import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { json } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const dispatch = useDispatch()
  // const [trailerId, setTrailerId] = useState(null)

  
  //Fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/933260/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json)

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    console.log(trailer)
    // setTrailerId(trailer.key)
    dispatch(addTrailerVideo(trailer))
  }
  
  useEffect(()=> {
    getMovieVideos();
  }, [])

  return (
    <div>
      <iframe width="100%" height="100vh" src={"https://www.youtube.com/embed/"+trailerVideo?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

    </div>
  )
}

export default VideoBackground