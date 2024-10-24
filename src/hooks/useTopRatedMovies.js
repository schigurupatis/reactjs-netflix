import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

const useTopRatedMovies = () => {
  //Fetch data from TMDB API & Update Redux Store
  const dispatch = useDispatch();

  const topRatedMovies = useSelector(
    (store) => store.movies.topRatedMovies
  );

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log("Results are: ", json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    // getNowPlayingMovies();
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
