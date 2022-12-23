import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Button1 = styled.button`
  width: 40%;
  border: none;
  margin: 10px;
  padding: 15px 15px;
  background-color: white;
  color: black;
  cursor: pointer;
`;
const Box2 = styled.div`
height:100%;
width: 50%;
border-radius: 10px;
color: black;
background-color: #939393;
padding: 10px;
margin: 10px;
`

const Box = ({name , email , id}) => {
  const [status , setStatus] = useState()
  const handleDelete = async id => {
    await axios.delete(`http://127.0.0.1:8001/api/v1/users/deleteMe/${id}`)
    setStatus(true)
  }
  if(status) {
    return <Box2/>
    }
  return (
    <Box2>
       <h3> User Info</h3>
      <div>
        <p>Name:{name} </p>
        <p>Email:{email}</p>
      </div>
      <a href={`edit/${id}`} >
      <Button1>Update</Button1>  </a>
      <Button1 onClick={() => handleDelete(id)} type='btn'>Delete</Button1>
       </Box2>
  )
}

export default Box