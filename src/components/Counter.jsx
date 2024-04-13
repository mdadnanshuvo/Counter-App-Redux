import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { CONTSTANTS } from './Services/constants';
import { incrementCounter, decrementCounter,resetCounter } from './Services/actions';

const Counter = () => {

    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();

    const handleIncrement = () =>
    {
        dispatch(incrementCounter());
    }
    const handleDecrement = () =>
    {
        dispatch(decrementCounter());
    }
    const handleReset = () =>
    {
        dispatch(resetCounter());
    }

  return (
    <div>
        <h1>Counter App using Redux</h1>
        <h3>Counter :{counter} </h3>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Counter