import { useState } from "react";


export interface FilmesResponse {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}


function App() {

  const [filmes, setFilmes] = useState<FilmesResponse[]>([])

  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=10&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjc3YTFiN2ZmNWYyZDQ2Nzc3YzMwNGQyMTA1NmM3ZCIsIm5iZiI6MTcyMzkzOTE2Ny4yOTUsInN1YiI6IjY2YzEzOTVmMjE0ZTIyNDJlOTkyMWMzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6STqxtAHtf3Hzbe08dxk3hmKZfgtAsbuqtKXRME45GY'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => setFilmes(json.results))
    .catch(err => console.error(err));

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <h1 className="font-bold text-3xl uppercase">Olá Mundo!</h1>
      {
        filmes.map((item, index) => (
          <ul key={index} className="flex-col">
            <li>{item.title}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default App
