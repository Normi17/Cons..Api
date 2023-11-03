// src/App.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Contenedor = styled.section`
  background-color: #000000;
  padding: 20px;
  text-align: center;
  h1{
    color: white;
    font-size: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #00fb92;
  color: white;
  padding: 10px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 2px 2px 10px white;
`;

const Title = styled.h5`
  color: black;
  margin: 10px 0;
`;

const Parrafo = styled.p`
  color: #e800c9;
`;

const Button = styled.button`
  background-color: #f07c00;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const initialUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error(error));
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [initialUrl]);

  useEffect(() => {
    const newUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
    fetchCharacters(newUrl);
  }, [page]);

  return (
    <Contenedor>
      <h1>Bienvenido a Rick and Morty</h1>
      <Grid>
        {characters.map((character) => (
          <Card key={character.id}>
            <Image src={character.image} alt={character.name} />
            <Title>{character.name}</Title>
            <Parrafo>Specie: {character.species}</Parrafo>
            <Parrafo>Location: {character.location.name}</Parrafo>
          </Card>
        ))}
      </Grid>
      <div>
        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </Contenedor>
  );
}

export default App;
