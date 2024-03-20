import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
function Tab() {
    let [i,setI] = useState(1);
    return (
        <>
        <div style={{margin:'50px'}}>
            <Nav variant="underline" defaultActiveKey="link-1">
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{setI(1)}}>Option 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={()=>{setI(2)}}>Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3" onClick={()=>{setI(3)}}> Option 3 </Nav.Link>
            </Nav.Item>
            </Nav>
            <div style={{height : '100px', background : 'skyblue'}}>
                <TabDetail i = {i - 1} />
            </div>
        </div>
        </>
    );
}

function TabDetail({i}){
    let [fade,setFade] = useState('');

    useEffect(()=>{
        setTimeout(()=>{setFade('end')},100);
        return()=>{setFade('')}
    },[i])

    return (
        <div className = {'start ' + fade}>
            {[<div>내용1</div>, <div>내용2</div>,<div>내용3</div>][i]}
        </div>
    );
}

export default Tab;

//if문은 바깥에서 쓸 수 있음 
// function TabDetail(props){
//     console.log(props.i);
//     if(props.i == 1) {
//         return <div>내용1</div>
//       }
//     if(props.i == 2){
//         return <div>내용2</div>  
//     }
//     if(props.i == 3){
//        return  <div>내용3</div> 
//     }
// }
