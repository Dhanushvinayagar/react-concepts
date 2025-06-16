import { useRef } from "react"

const UseRefHook = () => {
    const ref = useRef({ value: '' }) as any

    const handleChange = (e: any) => {
        ref.current.value = e.target.value
        console.log(ref);
    }

    return (
        <>
            <input type="text" ref={ref} onChange={handleChange} />
            <button onClick={() => ref.current.focus()}>Focus</button>
            <button onClick={() => ref.current.value = ""}>Clear</button>
        </>
    )
}

export default UseRefHook