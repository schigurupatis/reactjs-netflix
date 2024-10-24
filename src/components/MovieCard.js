import { IMG_CDN_URL } from "../utils/constants"
const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-5">

        <img src={IMG_CDN_URL + posterPath} alt="postername" />
    </div>
  )
}

export default MovieCard