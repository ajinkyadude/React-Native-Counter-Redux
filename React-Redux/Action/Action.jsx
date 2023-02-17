import { ADDITION, SUBSTRACTION } from "./ActionType";

export const addition=()=>({
    type: ADDITION,
    payload: 1
})

export const substraction=()=>({
    type: SUBSTRACTION,
    payload: 1
})