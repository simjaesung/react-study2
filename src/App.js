import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import Detail from './routes/detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">SorryShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')} href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/detail')} href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'/>
      <Routes>
        <Route path="/" element={
          <>
           <Container>
            <Row>
              {
                shoes.map(function(a,i){ 
                  return(
                    <Shoes a = {a} i = {i + 1} navigate={navigate}/>
                  )
                })
              }
            </Row>
          </Container>
          </>
        }/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="*" element={<div>404</div>}/>
      </Routes>
   
    </div>
  );
}

function Shoes(props){
  return(
    <Col>
      <img src={"https://codingapple1.github.io/shop/shoes" +props.i+ ".jpg"}
        style={{width:'80%'}}>
      </img>
      <h5 onClick={()=>{props.navigate('/detail')}}>{props.a.title}</h5>
      <p>{props.a.content}</p>
    </Col>
  )
}

export default App;
