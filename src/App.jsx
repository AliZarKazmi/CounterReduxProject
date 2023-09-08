import './App.css'
import {  useSelector,useDispatch } from 'react-redux'
function App() {

  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increment=()=>{
      dispatch({type :"Inc"})
  }

  const decrement=()=>{
    dispatch({type:'Dec'})
  }

  const addedValue=()=>{
    dispatch({type:'Add', payload: 10}) //Dispatch (action and payload)
  }
  return (
    <>
    <div>
    <h1>Counter App</h1>
    <h2>{counter}</h2>
    <button onClick={increment}> Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={addedValue}>Add 10 </button>
    </div>
    </>
  )
}

export default App
