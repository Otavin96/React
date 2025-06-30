import { useState } from "react";
import CardMovie from "./components/Card/cardMovie";
import Navbar from "./components/Navbar/navbar";
import { useFetchMovies } from "./hooks/useFetchMovie";
import { Pagination } from "./components/Pagination";
import { Footer } from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { movies, data, isLoading, error } = useFetchMovies({ query, page });

  if (isLoading) return <p>Carregando...</p>;
  if (movies.length === 0)
    return <p>Não foi encontrado um filme com esse titulo...</p>;
  if (error) return <p>Erro ao buscar filmes: {error.message}</p>;

  return (
    <main className="grid h-full justify-items-center bg-gray-100">
      <Navbar onSearch={setQuery} />

      <CardMovie movies={movies} />

      <Pagination
        total_pages={data!.total_pages}
        setPage={setPage}
        page={page}
      />

      <Footer />
    </main>
  );
}

export default App;
