import styled from "styled-components";
import Frase from "./components/Frase";
import imagen from "./logo.svg";
import { useState, useEffect } from "react";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  gap: 2rem;
`

const Boton = styled.button`
  margin: 2rem auto;
 	width: 150px;
	height: 50px;
	cursor: pointer;
	font-size: 1rem;
	font-weight: bold;
	color: black;
	background: white;
	border: 1px solid black;
	box-shadow: 5px 5px 0 black,
		-5px -5px 0 black,
		-5px 5px 0 black,
		5px -5px 0 black;
	transition: 500ms ease-in-out;

  &:hover{
    box-shadow: 10px 5px 0 black, -20px -5px 0 black;
  }
	
`;

const ImagenLogo = styled.img`
  max-width: 50%;
  margin: 2rem auto; 
  @media (min-width: 768px) {
    max-width: 30%;
  } 
  @media (min-width: 992px) {
    max-width: 25%;
  }
`

function App() {

  const [frase, setFrase] = useState({})
  const [vacio, setVacio] = useState(true)
  useEffect(() => {
    consultarAPI()
  }, [])
  

  const consultarAPI = async () =>{
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
      const {author, quote} = resultado[0];
        setFrase({
          autor:author,
          nota:quote
        }) 
        setVacio(false)
  }
  return (
    <Contenedor>
      <ImagenLogo src={imagen}/>
      {vacio === true ? null  : <Frase frase={frase}/> }
     
       <Boton
       onClick={consultarAPI}
       >
       Obtener Frase
    </Boton>
    </Contenedor>
   
   
  );
}

export default App;
