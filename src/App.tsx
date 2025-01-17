import './App.css'
import { decrement, increment, resetTasbeehViaThunk } from './store/tasbeeh/tasbeeh.slice'
import { selectResetStatus, selectTasbeehCount } from './store/tasbeeh/tasbeeh.selector'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store/store';


function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector(selectTasbeehCount);
  const dispatch = useDispatch<AppDispatch>();
  const resetStatus = useSelector(selectResetStatus)

  return (
    <>
      <h1>Tasbeeh Counter {count}</h1>
      <div className="card">
        {/* USE STATE */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button> */}

        {/* REDUCER */}
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(resetTasbeehViaThunk())}>
          Reset {resetStatus}
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
