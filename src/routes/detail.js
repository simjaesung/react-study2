import { useParams } from "react-router-dom";

function Detail(props){
    let {id} = useParams(); 
    let s = 0;
    console.log(id);
    for(let i = 0; i<props.shoes.length; i++){
        if(props.shoes[i].id == id) s = i;
    }
    
    let s2 = props.shoes.find(function(x){
        return x.id == id;
    })


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(++s)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{props.shoes[s-1].title}</h4>
                <p>{props.shoes[s-1].content}</p>
                <p>{props.shoes[s-1].price}원</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    ) 
}

export default Detail;