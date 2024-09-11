
import './App.css';
import './storeFolder/store';
import './storeFolder/counterSlice';
//step3 2 line below copy and paste function from counterSlice
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './storeFolder/counterSlice'
// step 1 install
//  npm install @reduxjs/toolkit
//step 2 install
//npm install react-redux
// or only install npm install @reduxjs/toolkit react-redux
// https://redux-toolkit.js.org/tutorials/quick-start
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
     <p>Result{count}</p>
     <button onClick={()=>dispatch(decrement())}>-</button>
     <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
