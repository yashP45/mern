/* eslint-disable no-restricted-globals */
import styled from "styled-components";
import Box from "../Components/Box";
import { useEffect , useState } from "react";
import Axios from 'axios'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Display = styled.div`
    flex: 1;
    
`
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

const Home = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status , setStatus] = useState()


const postData = async (e) => {
    e.preventDefault();
   await  Axios.post("http://127.0.0.1:8001/api/v1/users/createUser" , {
        name,
        email
    }).then(res => console.log(res.data)).catch(err => console.log(err))
    setStatus(true)
} 
useEffect( () => {
    Axios.get("http://127.0.0.1:8001/api/v1/users/").then(res => setProducts(res.data) ).catch(err => console.log(err));
}, []);

if(status) {
return <Home/>
}
  return (
    <Container>
      <Wrapper>
        <Title>Enter your details</Title>
        <Form>
          <Input type='text' value={name}  placeholder="name" onChange={(e) => setName(e.target.value)} />
          <Input type='text' value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
          <Button onClick={postData}>CREATE</Button>
        </Form>
      </Wrapper>
      <Display>
  
      {products.map((item) => <Box key= {item._id} name={item.name} email={item.email} id={item._id} />)}
      </Display>
    </Container>
  );
};
export default Home;
