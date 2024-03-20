import './App.css';
import {Container, Nav, Navbar, Row, Col, Spinner} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import Shoes from './routes/Shoes.js';
import Tab from './routes/Tabs.js';
import Detail from './routes/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';


function App() {
  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();
  let [load, setLoad] = useState(0);
  let [more,setMore] = useState(2);
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand >
            <Nav.Link onClick={()=>navigate('/')}>SorryShop</Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/detail')}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'/>
          <button onClick={()=>{
            setMore(more+1);
            if(more <=  3){
              setLoad(1);
              axios.get('https://codingapple1.github.io/shop/data'+more+'.json').then((결과)=>{
              console.log(결과.data);
              let copy = [...shoes, ...결과.data];
              setShoes(copy); setLoad(0);})
              .catch(()=>{ console.log("실패"); })
            }
            else alert('더이상 상품이 없습니다.');
          }}>더보기</button>
          <div style={{paddingTop : '10px'}}>
            {/* 더보기 누를 시 스핀 UI */}
            {load ? <Spinner animation="border" variant="secondary" /> : null}
           </div>
           <div className="container">
            <div className="row">
              {shoes.map(function(a,i){ 
                  return(
                    <Shoes a = {a} i = {i+1} navigate={navigate}/>
                  )
                })}
            </div>
          </div>
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

function About(){
  return (
    <>
    <div>어바웃페이지</div>
    <Outlet></Outlet>
    </>
  )
}

export default App;
