import {  useMemo, useState } from "react";

const length = 10000000;

const arr = Array.from({ length: length}, (_, i) => i + 1)

const findData = (data:number[],id:number) => {
    console.log("Compute expensive data");
    return data?.find((item) => item === id);
}

const UseMemoExample = () => {
    const [name, setName] = useState<string>("");

    const [id, setId] = useState<number>(length - 1);
    const [data] = useState<any[]>(arr); 

    // let processedData = findData(data,id)

    //derived state are mostly memorized to avoid re-computation
    const processedData = useMemo(()=>{
        return findData(data,id)
    },[data,id])

    return (
        <div>
            <input
                type="text"
                value={name}
                min={0}
                max={length - 1}
                // unrelated task to find data will trigger high computation task
                onChange={(e) => setName( e.target.value)}
            />
            <p>Name: {name}</p>
            <br />

            <input
                type="number"
                value={id}
                min={0}
                max={length - 1}
                onChange={(e) => setId(parseInt(e.target.value))}
            />
            <p>ID: {id}</p>
            <div>
                <h2>Processed Data:</h2>
                <p>{processedData}</p>
            </div>
        </div>
    );
};

export default UseMemoExample;
