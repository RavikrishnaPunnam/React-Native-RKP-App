import {ADDITION,SUBTRACTION,LOCATIONDATA} from './actionTypes';

export const addtion =() => ({
    type:ADDITION
});
export const subtraction =() => ({
    type:SUBTRACTION
});
export const locationData =(loc:any) =>  {
    //  console.log("data" ,loc);
return {
    type:LOCATIONDATA,
    loc
}};