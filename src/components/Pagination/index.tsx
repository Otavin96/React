import { Dispatch, SetStateAction } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

interface PaginationProps {
  total_pages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export function Pagination({ total_pages, page, setPage }: PaginationProps) {
  if (total_pages <= 1) return null;          // nada a paginar

  const PAGE_WINDOW = 10;
  const pageNumbers = Array.from({ length: total_pages }, (_, i) => i + 1);

  const startIndex = Math.floor((page - 1) / PAGE_WINDOW) * PAGE_WINDOW;
  const visiblePages = pageNumbers.slice(startIndex, startIndex + PAGE_WINDOW);

  const isFirst = page === 1;
  const isLast = page === total_pages;

  return (
    <nav className="flex gap-2 bg-teal-600 w-fit px-4 py-2 rounded text-white">
      <button
        disabled={isFirst}
        aria-label="Página anterior"
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        className={`disabled:opacity-30 cursor-pointer`}
      >
        <MdArrowLeft size={24} />
      </button>

      {visiblePages.map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={`px-2 rounded cursor-pointer ${
            num === page ? "bg-white text-teal-600 font-bold" : "hover:bg-white/20 cursor-pointer"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        disabled={isLast}
        aria-label="Próxima página"
        onClick={() => setPage((p) => Math.min(p + 1, total_pages))}
        className={`disabled:opacity-30 cursor-pointer`}
      >
        <MdArrowRight size={24} />
      </button>
    </nav>
  );
}
