import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjc3YTFiN2ZmNWYyZDQ2Nzc3YzMwNGQyMTA1NmM3ZCIsIm5iZiI6MTcyMzkzOTE2Ny4yOTUsInN1YiI6IjY2YzEzOTVmMjE0ZTIyNDJlOTkyMWMzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6STqxtAHtf3Hzbe08dxk3hmKZfgtAsbuqtKXRME45GY",
  },
});
