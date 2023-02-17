import { ADDITION, SUBSTRACTION } from "../Action/ActionType";

const initialstate={
    counter: 0
};

export const mainReducer = (state=initialstate,action)=> {
    switch(action.type)
    {
        case ADDITION:
            return {...state,counter: state.counter+1};
        case SUBSTRACTION:
            return {...state,counter: state.counter-1};
        default:
            return state;
    }
}

// const mainReducer=(state=0, action)=>{
//     if(action.type===ADDITION)
//     {
//         return state + action.payload
//     }
//     else if(action.type===SUBSTRACTION){
//         return state - action.payload
//     }
//     else{
//         return state;
//     }
// }

// export default mainReducer;