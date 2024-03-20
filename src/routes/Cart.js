import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeCnt, delItem } from "../store";
function Cart(){
    let basket = useSelector((state) => { return state.basket });
    let dispatch = useDispatch();
    console.log(basket);
    return(
        <Table>
        <thead>
            <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제하기</th>
            </tr>
        </thead>
        {
            basket.map(function(a,i){
                return(
                    <tbody>
                        <tr>
                        <td>{i + 1}</td>
                        <td>{a.name}</td>
                        <td>{a.count}</td>
                        <td><button onClick={()=>{dispatch(changeCnt(a.id))}}>+</button></td>
                        <td><button onClick={()=>{dispatch(delItem(a.id))}}>삭제</button></td>
                        </tr>
                    </tbody>
                )
            })
        }
        
        </Table> 
    )
}

export default Cart;