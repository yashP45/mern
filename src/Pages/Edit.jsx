import React from 'react'
import styled from "styled-components";
import Axios from 'axios'
import { useState , useEffect } from 'react';


import { useNavigate, useParams } from 'react-router';

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
 flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  margin-top: 10px;
  padding: 15px 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;



const Edit = () => {
    const { id } = useParams();
    const history = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [data , setData] = useState({})

useEffect(() => {
  Axios.get(`http://127.0.0.1:8001/api/v1/users/${id}`).then(res => setData(res.data) ).catch(err => console.log(err));
}, [id]);

const handleClick = () => {
  history("/")
}
const updateData = async (e) => {
 
 await  Axios.put(`http://127.0.0.1:8001/api/v1/users/updateMe/${id}`, {
      name,
      email
  }).then(res => console.log(res.data)).catch(err => console.log(err))
} 

  return (
    <Wrapper>
    <Title>Enter your details</Title>
    <Form>
      <Input type='text' defaultValue={data.name}  placeholder="name" onChange={(e) => setName(e.target.value)}  />
      <Input type='text' defaultValue={data.email}   placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
      <Button onClick={updateData}>Update</Button>
      <Button onClick={handleClick}> Back to home</Button>
    </Form>
  </Wrapper>
  )
}

export default Edit