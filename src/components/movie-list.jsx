const movies = [
    { title: "Avatar", year: "2009", director: "James Cameron" },
    { title: "Inception", year: "2010", director: "Christopher Nolan" },
    { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
    { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
    { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
    { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
  ];

function MovieList({ selectedMovie, onChange }) {
    return (
      <div className="space-y-2">
        {movies.map((movie) => (
          <label key={movie.title} className="flex items-center space-x-3">
            <input
              type="radio"
              name="movie"
              value={movie.title}
              checked={selectedMovie === movie.title}
              onChange={onChange}
              className="form-radio text-purple-600"
            />
            <div>
              <p className="font-medium">{movie.title} ({movie.year})</p>
              <p className="text-sm text-gray-500">Director: {movie.director}</p>
            </div>
          </label>
        ))}
      </div>
    );
  }

export default MovieList;