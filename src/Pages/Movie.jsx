import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Contain = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Muestra en 4 columnas */
  grid-gap: 20px;
  justify-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* Cambia a 3 columnas en pantallas más pequeñas */
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* Cambia a 2 columnas en pantallas más pequeñas */
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Una columna en pantallas muy pequeñas */
  }
`;

const Welcome = styled.h1`
  color: white;
  font-size: 36px;
  margin-bottom: 20px;
`;

const CardMovie = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
  max-width: 300px;
  &:hover {
    transform: scale(1.05);
  }
`;

const Titulos = styled.h3`
  color: #020202;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Descrip = styled.p`
  color: orange;
  font-size: 16px;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-top: 10px;
`;

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "d09c3d3affec3a957d27b31b783e9cd9";

function Movie() {
  const [movies, setMovies] = useState([]);

  const mtbmovie = async () => {
    const response = await fetch(
      `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
    );
    const jsonData = await response.json();
    setMovies(jsonData.results);
  };

  useEffect(() => {
    mtbmovie();
  }, []);

  return (
    <Contain>
      <Welcome>Bienvenido a Movie</Welcome>
      <MovieGrid>
        {movies.map((movie) => (
          <CardMovie key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <Titulos>{movie.title}</Titulos>
            <Descrip>{movie.overview}</Descrip>
          </CardMovie>
        ))}
      </MovieGrid>
    </Contain>
  );
}

export default Movie;
