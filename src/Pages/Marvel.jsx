import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import md5 from 'md5';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.article`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  max-width: 300px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const publicKey = 'a98fa121cc775905932f1ca6b2d195d4';
  const privateKey = '9a0465ae832f7b372ae0031c0a72c8de522d3e56';

  const generateHash = () => {
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    return `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  };

  const getCharacters = () => {
    const url = `https://gateway.marvel.com/v1/public/characters?${generateHash()}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <CardContainer>
      {characters.map(character => (
        <Card key={character.id}>
          <img src={`${character.thumbnail.path}/portrait_xlarge.jpg`} alt={character.name} />
          <h2>{character.name}</h2>
          <p>{character.description || 'No description available'}</p>
        </Card>
      ))}
    </CardContainer>
  );
};

export default App;
