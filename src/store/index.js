import { createStore } from "redux";
import reducer from "./reducer";

const init = 0;
const store = createStore(reducer, init);

export default store;
