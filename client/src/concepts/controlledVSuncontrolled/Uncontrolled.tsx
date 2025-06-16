import { useRef } from "react"

//uncontrolled component - data is managed by DOM and not by state
const Uncontrolled = () => {
    const ref = useRef({ value: '' }) as any

    return (
        <>
            <h1>Uncontrolled</h1>
            <input type="text" ref={ref} />
            <button onClick={() => console.log(ref.current.value)}>Submit</button>
        </>
    )
}

export default Uncontrolled