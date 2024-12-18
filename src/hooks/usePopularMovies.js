import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  //Fetch data from TMDB API & Update Redux Store
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log("Popular are: ", json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    // getPopularMovies();
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
