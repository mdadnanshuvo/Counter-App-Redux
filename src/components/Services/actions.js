import { CONTSTANTS } from "./constants"

export const incrementCounter = () =>
{
    return {
        type : CONTSTANTS.INCREMENT,
    }
}

export const decrementCounter = () =>
{
    return {
        type : CONTSTANTS.DECREMENT,
    }
}

export const resetCounter = () =>
{
    return {
        type : CONTSTANTS.RESET,
    }
}