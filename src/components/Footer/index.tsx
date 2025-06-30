export function Footer() {
  return (
    <footer className="flex w-full bg-zinc-500 h-16 border-black border-t-1 justify-center items-center mt-10">
      <p className="font-medium text-white">
        Site desenvolvido por Otavio Afonso Lazzarotto. Para praticar o uso do
        React + TypeScprit, consumindo a API de Filmes:
        <a
          className="pl-2 uppercase hover:text-black"
          href="https://www.themoviedb.org/?language=pt-br"
        >
          www.themoviedb.org
        </a>
      </p>
    </footer>
  );
}
