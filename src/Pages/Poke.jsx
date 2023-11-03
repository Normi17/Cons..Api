// src/App.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  width: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin: 10px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  h2 {
    margin: 10px 0;
    color: #333;
  }

  p {
    color: #555;
  }
`;

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();
        const results = data.results;

        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const details = await response.json();
            return {
              name: pokemon.name,
              img: details.sprites.front_default,
              hp: details.stats[0].base_stat,
              attack: details.stats[1].base_stat,
              defense: details.stats[2].base_stat,
              speed: details.stats[5].base_stat,
            };
          })
        );

        setPokemonData(pokemonDetails);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <AppContainer>
      <h1>Pokémon Cards</h1>
      <CardContainer>
        {pokemonData.map((pokemon, index) => (
          <Card key={index}>
            <img src={pokemon.img} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Speed: {pokemon.speed}</p>
          </Card>
        ))}
      </CardContainer>
    </AppContainer>
  );
}

export default App;
