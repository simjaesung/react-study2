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
          <Navbar.Brand href="#home">
            <Nav.Link onClick={()=>navigate('/')}>SorryShop</Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/detail')}>Cart</Nav.Link>
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
                    <Shoes a = {a} i = {i+1} navigate={navigate}/>
                  )
                })
              }
            </Row>
          </Container>
          </>
        }/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>

        <Route path="/about" element={<About/>}>
          <Route path="member" element ={<div>멤버페이지</div>}/>
          <Route path="location" element={<div>지역페이지</div>}/>
        </Route>
        <Route path="/event" element={<><h3>오늘의 이벤트</h3> <Outlet></Outlet></>}>
          <Route path="one" element={<h5>첫 주문시 양배추즙 서비스</h5>}/>
          <Route  path="two" element={<h5>생일기념 쿠폰 받기</h5>}/>
        </Route>

        <Route path="*" element={<div>잘못된 페이지입니다.</div>}/>
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
      <h5 onClick={()=>{props.navigate('/detail/'+ props.a.id)}}>{props.a.title}</h5>
      <p>{props.a.content}</p>
    </Col>
  )
}

function About(){
  return (
    <>
    <div>어바웃페이지</div>
    <Outlet></Outlet>
    </>
  )
}

export default App;
