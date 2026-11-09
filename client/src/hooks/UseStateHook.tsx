import { useState } from "react"

const UseStateHook = () => {

    const [count, setCount] = useState<number>(0)

    return (
        <>
            {count}
            <button onClick={() => setCount(count + 1)}>Count</button>

            <button onClick={() =>{ 
                setCount(2)
                setCount(3)
            }}>Count</button>

            <button onClick={() =>{ 
                setCount(count+3)
                setCount(count+2)
            }}>Count</button>

            <button onClick={() =>{ 
                setCount(count=>count + 1)
                setCount(count=>count + 1)
                setCount(count=>count + 1)
            }}>Count</button>
            
            <button onClick={() =>{ 
                setCount(count=>count + 1)
                setCount(count=>count + 1)
                setCount(count + 1)
                setCount(count=>count + 1)
            }}>Count</button>
        </>
    )
}

export default UseStateHook