
const MovieCard = (movies) => {
    console.log(movies)
  return (
    <div className="movie">
      <div>
        <p>{movies.movie.Year}</p>
        { console.log(movies.movie.Year) }
      </div>

      <div>
        <img src={movies.movie.Poster !== "N/A" ? movies.movie.Poster : "https://via.placeholder.com/400"} alt={movies.movie.Title} />
      </div>

      <div>
        <span>{movies.movie.Type}</span>
        <h3>{movies.movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard; 