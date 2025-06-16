import { useReducer } from "react"
import { reducer } from "./reducer";

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <p>Count : {state.count} </p>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", by: 2 })}>Decrement</button>
        </>
    )
}

export default UseReducer