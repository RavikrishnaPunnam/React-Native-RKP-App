import {ADDITION,SUBTRACTION,LOCATIONDATA} from './actionTypes';

const data = '  RKP Mamba, Hey whatsuff!!!!    '
const initialState ={
    counter: 0,
    name:data,
    mylocationData: null

};
export const mainReducer = (state= initialState,action:any)=>{
//    console.log("Action",action)
    switch (action.type) {
        case ADDITION:            
            return {...state, counter:state.counter + 1}
    
            case SUBTRACTION:            
            return {...state, counter:state.counter - 1}

            case LOCATIONDATA :
                // console.log(action.loc)
                return {...state, location :action.loc}
              //  return {...state, location :[...state.location ,...action.loc]}

            default:
                return state;
    }
}