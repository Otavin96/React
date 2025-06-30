import { useEffect, useState } from "react";
import type { Movie, MoviesApiResponse } from "../dtos/movies";
import { api } from "../api/api";

type UseFetchMoviesProps = {
  query?: string;
  page?: number;
};

export const useFetchMovies = ({
  query = "",
  page = 1,
}: UseFetchMoviesProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [data, setData] = useState<MoviesApiResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const endpoint = query ? "/search/movie" : "/discover/movie";
        const response = await api.get(endpoint, {
          params: {
            query,
            page,
            language: "pt-BR",
            include_adult: false,
            include_video: true,
            sort_by: "popularity.desc",
          },
        });
        setData(response.data);
        setMovies(response.data.results);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query, page]);

  return { movies, data, isLoading, error };
};
