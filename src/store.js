import { configureStore, createSlice } from '@reduxjs/toolkit'

let basket = createSlice({
    name : 'basket',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        changeCnt(state,action){
            let idx = state.findIndex((e)=>{ return e.id == action.payload });
            state[idx].count++;
        },
        addItem(state,action){
            let check = state.find((e)=>{return e.name === action.payload.title});
            if(check){
                let idx = state.findIndex((e)=>{ return e.name === action.payload.title });
                state[idx].count++;
            }
            else {
                let tmp = action.payload;
                state.push({id : tmp.id, name : tmp.title, count : 1});
            }
        },
        delItem(state,action){
            let idx = state.findIndex((e)=>{ return e.id == action.payload });
            state.splice(idx,1);
        }
    }
})

export let { changeCnt, addItem, delItem } = basket.actions;


export default configureStore({
  reducer: {
    basket : basket.reducer
   }
}) 