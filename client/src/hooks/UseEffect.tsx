import { useEffect, useState } from "react"

// setTimeout will be called each 1sec , due to rerender of component

const UseEffect = () => {

    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState<any[]>([]);

    const [time, setTime] = useState(new Date().toString());
    
    useEffect(()=>{
        console.log("Initial render");
    },[])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((data) => setData(data))
    },[])

    useEffect(()=>{
        console.log("data render");
        if(data.length > 0){
            setToggle(true)
        }
    },[data])



    //bad practice
    // useEffect(()=>{
    //     console.log("Instead of calling the interval function it reruns the useeffect");

    //     const interval = setInterval(() => {
    //         setTime(new Date().toString());
    //     }, 1000);
        
    //     console.log("interval");
            
    //     return () => {
    //         console.log("Cleanup");
    //         clearInterval(interval);
    //     }

    // },[time])

    //bad practice
    // useEffect(()=>{
    //     console.log("Instead of calling the timeout function it reruns the useeffect");

    //     const timer = setTimeout(() => {
    //         setTime(new Date().toString());
    //     }, 1000);

    //     return () => {
    //         console.log("Cleanup");
    //         clearTimeout(timer);
    //     }

    // },[time])

    //good practice
    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(new Date().toString());
        }, 1000);
        
        console.log("interval");
            
        return () => {
            console.log("Cleanup");
            clearInterval(interval);
        }
    },[])

    console.log("component render");

    return (
        <>
            <div>
                <h4>{time}</h4>
            </div>
            <div>
                <h4>{toggle ? "Data fetched" : "Waiting for data"}</h4>
            </div>

            <div>
                { data.slice(0,10).map((item) => <p key={item.id}>{item.title}</p>) }
            </div>
        </>
    )
}

export default UseEffect