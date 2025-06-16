import { useCallback, useState } from "react"
import Child from "./Child";

const arr = ['Apple', 'Banana', 'Orange', 'Watermelon', 'Pineapple'];

const Usecallback = () => {

    const [count, setCount] = useState<number>(0);

    const [data, setData] = useState<any[]>(arr);

    const handleSearch = useCallback((value: string) => {
        setData(data.filter((item) => item.includes(value)))
    }, [
        // count
    ])
    // if we put count in dependency array then it will be rendered only when count is clicked even though we search in input

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <br />
            <Child onSearch={handleSearch} />

            <div>
                {
                    data.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })
                }
            </div>
        </div>
    );
}

export default Usecallback