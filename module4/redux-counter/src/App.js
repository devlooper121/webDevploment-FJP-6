
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from './redux/action';

function App() {
  const state = useSelector(function(state){
    // we can do more
    return state
  });

  const dispatch = useDispatch();

  return (
    <>
      <h2> count : {state} </h2>
      <button onClick={()=>{
          return dispatch(incrementCounter())
        }
      } >+</button>
    </>
  );
}

export default App;
