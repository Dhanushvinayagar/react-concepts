import { useState } from "react"

const UseStateHook = () => {

    const [count, setCount] = useState<number>(0)

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </>
    )
}

export default UseStateHook