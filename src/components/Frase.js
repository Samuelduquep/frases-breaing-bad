import React from 'react'
import styled from 'styled-components'


const Contenedor = styled.div`
    background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
    background-blend-mode: normal,color-burn;
    border-radius: 2rem;
    padding: 2rem;
    margin: auto 2rem;
    position: relative;

    @media (min-width: 768px) {
        width: 50%;
    }
`

const Autor = styled.p`
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #3B4461;
    text-align: right;
    span{
        font-size:1rem;
        font-weight: 700;
    }
`
const FraseNota = styled.h1`
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #3B4461;
    text-align: center;
    padding: 1rem 0;
    &::before{
        content: open-quote;
        font-size: 5rem;
        position: absolute;
        left: 0.09rem;
        top: -1rem;
        padding: 1rem;
    }
`


const Frase = ({frase}) => {
    const {autor, nota} = frase
  return (
    <Contenedor>
    <FraseNota>{nota}</FraseNota>
    <Autor><span>-</span>{autor}</Autor>
     
    </Contenedor>
  )
}

export default Frase
