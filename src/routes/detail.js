import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Tab from './Tabs.js';
import styled from 'styled-components';

function Detail(props){
    // let [popup, setPop] = useState(1);
    // let[time,setTime] = useState(2);
    let {id} = useParams();
    let p = parseInt(id) + 1;
    let[input,setInput] = useState('');
    let [fade, setFade] = useState('');
    let [shoes,setShoes] = useState(props.shoes);
    //console.log(shoes);
    //html 랜더링 후에 동작, 시간이 오래 걸리는 코드를 여기다 작성(side Effect 코드)
    useEffect(()=>{
        setTimeout(()=>{setFade('end')},100);
        return ()=>{setFade('');}
    },[]) 

    useEffect(()=>{
        if(isNaN(input)) {
            alert('숫자만 입력해주세요!');
            document.getElementById('input').value = null;
        }
        console.log(input);
    },[input])
  
    return(
        <>
        <div className={"container start " + fade}>
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+p+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{shoes[id].title}</h4>
                <p>{shoes[id].content}</p>
                <p>{shoes[id].price}원</p>
                <p><input id = "input" onChange={(e)=>{setInput(e.target.value)}}></input></p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
        <Tab/>
        </>
    ) 
}

function Popup(props){
    return (
        <div className = "alert alert-warning">
            {props.time}초이내 구매시 할인
        </div>
    )
}

export default Detail;