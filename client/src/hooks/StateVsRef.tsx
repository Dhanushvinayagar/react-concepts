import { useRef, useState } from "react"

const StateVsRef = () => {

    const [count, setCount] = useState<number>(0)
    const ref = useRef({value:0}) as any
  
    return (
      <>
        <h1>Click ref multiple times then State</h1>
        <button ref={ref} onClick={()=>ref.current.value++}>Ref: {ref.current.value}</button>
        <br />
        <button onClick={() => setCount(count + 1)}>State: {count}</button>
      </>
    )
}

export default StateVsRef