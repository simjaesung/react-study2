function Shoes(props){
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+props.i+".jpg"} width="80%" 
      onClick={()=>{props.navigate('/detail/'+ props.a.id)}}/>
      <h5 onClick={()=>{props.navigate('/detail/'+ props.a.id)}}>{props.a.title}</h5>
      <p>{props.a.content}</p>
    </div>
  )}

export default Shoes;