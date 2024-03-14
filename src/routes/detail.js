import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Tab from './Tabs.js';
import styled from 'styled-components';

// let YellowButton = styled.button`
//     background : ${ props => props.bg };
//     color : ${ props => props.bg  == 'blue' ? 'white' : 'black'};
//     padding : 10px;
// `

function Detail(props){
    let [popup, setPop] = useState(1);
    let[time,setTime] = useState(2);
    let {id} = useParams(); 
    let[input,setInput] = useState('');
    let s = 0;

    //html 랜더링 후에 동작, 시간이 오래 걸리는 코드를 여기다 작성(side Effect 코드)
    useEffect(()=>{
        let a = setTimeout(()=>{setPop(0)},3000);
        if(time > 0){
            setTimeout(()=>{setTime(time - 1)},1000);
        }
        //useEffect 실행 전에 실행되는 코드
        return()=>{
            //기존 타이머는 제거해주세요 
            clearTimeout(a);
            //기존 데이터 요청은 제거해주세요 
        }
        
    },[]) 

    useEffect(()=>{
        if(isNaN(input)) {
            alert('숫자만 입력해주세요!');
            document.getElementById('input').value = null;
        }
        console.log(input);
    },[input])

    for(let i = 0; i<props.shoes.length; i++){
        if(props.shoes[i].id == id) s = i;
    } 
    
    let s2 = props.shoes.find(function(x){
        return x.id == id;
    })
  
    return(
        <>
        <div className="container">
            {
                popup? <Popup time = {time}/> : null
            }
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(++s)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{props.shoes[s-1].title}</h4>
                <p>{props.shoes[s-1].content}</p>
                <p>{props.shoes[s-1].price}원</p>
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
        <>
        <div className = "alert alert-warning">
            {props.time}초이내 구매시 할인
        </div>
        </>
    )
}

export default Detail;