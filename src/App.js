import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLoggec);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>hello</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>Is logged in: {isLogged}</h1>
    </div>
  );
}

export default App;
