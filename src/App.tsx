import { useState } from "react";
import CardMovie from "./components/Card/cardMovie";
import Navbar from "./components/Navbar/navbar";
import { useFetchMovies } from "./hooks/useFetchMovie";

function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useFetchMovies({ query });

  console.log(movies);

  if (isLoading) return <p>Carregando...</p>;
  if (movies.length === 0)
    return <p>Não foi encontrado um filme com esse titulo...</p>;
  if (error) return <p>Erro ao buscar filmes: {error.message}</p>;

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  return (
    <main className="grid h-full justify-items-center bg-gray-100">
      <Navbar handleSearch={handleSearch} />
      <CardMovie movies={movies} />
    </main>
  );
}

export default App;
