import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import Tab from './routes/Tabs.js';
import Detail from './routes/detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';


function App() {
  let [shoes,setShoes] = useState(data);
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
           <div className="container">
            <div className="row">
              {
                shoes.map(function(a,i){ 
                  return(
                    <Shoes a = {a} i = {i+1} navigate={navigate}/>
                  )
                })
              }
            </div>
          </div>
          <button onClick={()=>{
            //로딩 중 UI 띄우기
            axios.get('https://codingapple1.github.io/shop/data3.json').then((결과)=>{
              console.log(결과.data);
              let copy = [...shoes, ...결과.data];
              // for(var i = 0; i< 결과.data.length; i++){
              //   copy.push(결과.data[i]);
              // }
              if(copy.length > 9) alert('더이상 상품이 없습니다.');
              else setShoes(copy);
              //로딩 중 UI 숨기기
            })
              .catch(()=>{ console.log("실패");})
          }}>더보기</button>
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
      <div className="col-md-4">
        <img src={"https://codingapple1.github.io/shop/shoes"+props.i+".jpg"} width="80%" />
        <h5 onClick={()=>{props.navigate('/detail/'+ props.a.id)}}>{props.a.title}</h5>
        <p>{props.a.content}</p>
      </div>
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
