import type { Movie } from "../../dtos/movies";
import { ImStarFull } from "react-icons/im";

type CardMovieProps = {
  movies: Movie[];
};

function CardMovie({ movies }: CardMovieProps) {
  return (
    <div className="p-4 grid grid-cols-6 gap-6">
      {movies.map((movie) => (
        <article
          key={movie.id}
          className="flex flex-col bg-gray-200 rounded-md shadow-xl hover:cursor-pointer"
          aria-label={`Filme ${movie.title}`}
        >
          <div className="w-full bg-white rounded-t-md p-2">
            <h3 className="text-center font-bold uppercase">{movie.title}</h3>
          </div>

          <img
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            alt={`Poster do filme ${movie.title}`}
            className="pt-2 mx-auto"
          />

          <div className="p-2 flex flex-col gap-1">
            <div className="flex gap-1">
              <p className="font-bold">Data de Lançamento:</p>
              <p>{movie.release_date}</p>
            </div>
            <div className="flex items-center gap-1">
              <ImStarFull color="#DDA520" />
              <p>{movie.vote_average}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default CardMovie;
