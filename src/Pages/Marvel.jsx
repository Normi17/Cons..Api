import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import md5 from 'md5';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CharacterCard = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
`;

const CharacterName = styled.h2`
  font-size: 20px;
  margin: 0;
`;

function MarvelCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const publicKey = 'a98fa121cc775905932f1ca6b2d195d4';
    const privateKey = '9a0465ae832f7b372ae0031c0a72c8de522d3e56';

    const timestamp = new Date().getTime();
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);
    const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data.results);
      });
  }, []);

  return (
    <Container>
      {characters.map((character) => (
        <CharacterCard key={character.id}>
          <CharacterName>{character.name}</CharacterName>
          <p>{character.description}</p>
        </CharacterCard>
      ))}
    </Container>
  );
}

export default MarvelCharacters;
