import React, { useState } from 'react'
import axios from 'axios'
import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'


const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background-color: #8ab3cf;
   }
`
const Title = styled.h1`
  text-align: center;
  margin-top: 10vh;
  color: #4180ab;
`
const Button = styled.button`
  transition: 0.7s;
  width: 175px;
  height: 40px;
  font-size: 1.8vh;
  font-weight: bold;
  background-color: #bdd1de;
  border-style: none;
  border-radius: 10px;
  &:hover{
    cursor: pointer;
    background-color: #4180ab;
  }
`
const Box = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.4);
    margin-top: 7vh;
    width: 400px;

    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    @media(max-width: 425px){
      width: 310px;
    }
  }
`



export default function App(){

const [dog, setDog] = useState()
const [stateImg, setStateImg] = useState(false)

function DogList(){
  axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) =>{
    setDog(response.data.message)
    setStateImg(true)
  })
}


  return(
    <>
    <GlobalStyle/>
    <Title>Faça o seu dia mais feliz com apenas um clique :)</Title>
    <Box>
      <Button onClick={()=>{DogList()}}>Clique aqui</Button>
      {stateImg && <img src={dog} alt="Foto aleatória de um doguinho"/>}
    </Box>
    
    </>
    )
}