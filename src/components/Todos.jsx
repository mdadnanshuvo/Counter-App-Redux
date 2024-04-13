import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getAllTodos } from '../TodosComponent/actions';
const Todos = () => {

    const {isLoading, error, todos} = useSelector((state) => state);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllTodos());
    }, []);
    
    console.log(todos);

  return (
    <div>
        <h1>Todos App</h1>
        <h3>Welcome to my Redux App</h3>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}

       
    </div>
  )
}

export default Todos