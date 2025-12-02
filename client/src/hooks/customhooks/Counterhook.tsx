import { useState } from "react"

const useCounterhook = () => {

    const [count, setCount] = useState(0)

    const increment : any = () => {
        setCount((prev: number) => prev + 1)
    }

    const decrement : any = () => {
        setCount((prev: number) => prev - 1)
    }

    return [count, increment, decrement]
}

export default useCounterhook