import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

const useUpComingMovies = () => {
  //Fetch data from TMDB API & Update Redux Store
  const dispatch = useDispatch();

  const upComingMovies = useSelector(
    (store) => store.movies.upComingMovies
  );

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log("Results are: ", json.results);
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    // getNowPlayingMovies();
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
