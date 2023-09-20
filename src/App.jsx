import store from "./store";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const data = useSelector((state) => state);

  const dispatch = useDispatch((dispatch) => dispatch);

  return (
    <div>
      <div>count {data} </div>
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "sub" });
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default App;
