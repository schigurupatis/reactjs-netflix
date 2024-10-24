import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  //Fetch data from TMDB API & Update Redux Store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    console.log("Results are: ", data.results);
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    // getNowPlayingMovies();
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
