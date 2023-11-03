import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Tittle = styled.h1`
color : #ff9500;
text-align: center;
font-size: 5rem;
margin:  0 0 30px;
font-family: sans-serif;
`;

const ContainerCard = styled.div`
max-width: 1300px;
margin: 0 auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
background-color: black;
`;

const Tarjeta = styled.div`
background-color: #000000;
width: 28%;
margin: 10px;
padding: 20px;
box-shadow: 2px 2px 10px white;
border-radius: 5px;
transition: transform 0.2s;
&:hover {
    transform: scale(1.03); 
    box-shadow: 4px 4px 20px white;

  }
`;

const Name = styled.h5`
color: #ffffff;
text-align: center;
font-size: 1.3rem;
font-family: 'Courier New', Courier, monospace; 
font-weight: 800;
`;

const Descrip = styled.p`
color: #00bfff;
font-size:12px;
font-family: sans-serif;
`;

const Imagen = styled.img`
width: 300px;
height: 300px;
object-fit: contain;
`;

function Home() {
  const [fake, setFake] = useState([]);

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setFake(jsonData);
  }

  useEffect(() => {
    fakestore();
  }, []);

  return (
    < >

      <Tittle>¡Bienvenido a FakeStore!</Tittle>
      <ContainerCard>
        {fake.map((values) => {
          return (
            <Tarjeta key={values.id}>
              <div>
                <Name>{values.title}</Name>
                <Descrip>{values.description}</Descrip>
              </div>
              <Imagen src={values.image} alt="" />
            </Tarjeta>
          );
        })}
      </ContainerCard>
    </>
  );
}

export default Home;
