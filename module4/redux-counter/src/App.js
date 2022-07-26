
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementCounter,
  decrementCount,
  login,
  logout
} from './redux/action';

function App() {
  const count = useSelector(function (state) {
    // we can do more
    return state.count
  });

  const logged = useSelector((state) => state.logged)

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => {
        return dispatch(login())
      }} >login</button>
      <button onClick={() => dispatch(logout())} >logout</button>
      {
        logged === false ? <></> :
          <>
            <h2> count : {count} </h2>
            <button onClick={() => {
              return dispatch(incrementCounter())
            }
            } >+</button>
            <button onClick={() => {
              return dispatch(incrementCounter())
            }
            } >+</button>
            <button onClick={() => {
              return dispatch(decrementCount())
            }
            } >-</button>
          </>
      }

    </>
  );
}

export default App;
