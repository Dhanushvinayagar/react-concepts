import useCounterhook from "./Counterhook";
import useTimer from "./Timerhook";

const Customhooks = () => {

    // the stae value in the hooks are independent and not shared unless we redeclare them
    // for eg: creating counter in a different component will not affect the counter value in this component
    const [count, increment, decrement] = useCounterhook();

    const [timer, starttimer, stoptimer] = useTimer();

    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={decrement}>-</button>
                <p>Count: {count}</p>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <p>Timer: {timer}</p>
                <button onClick={starttimer}>Start</button>
                <button onClick={stoptimer}>stop</button>
            </div>
        </>
    )
}

export default Customhooks