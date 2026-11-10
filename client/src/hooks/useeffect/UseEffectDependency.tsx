import { useEffect, useState } from 'react'

const UseEffectDependency = () => {

    
    const [value, setValue] = useState(1);
    const [num, setNum] = useState({val:1});

    useEffect(()=>{
        console.log("value changed");
    },[value])

    useEffect(()=>{
        console.log("num changed");
    },[num])

    console.log("component render");

    return (
        <>  
            {/* State dependency wont cause rerender */}
            <button onClick={() => setValue(1)}>Click</button>
            {/* State dependency wont cause rerender after it was assigned to 2*/}
            <button onClick={() => setValue(2)}>Click</button>

            {/* Object dependency will cause rerender */}
            <button onClick={() => setNum({val:2})}>Click</button>
        </>
    )
}

export default UseEffectDependency