import { useEffect } from "react"

const Impure = ({ data }: { data: string }) => {
    // Impure component - Rerender even when props or state is not changed
    let impureData = Math.random()

    useEffect(() => {
        console.log(impureData);
    }, [impureData])

    console.log("Impure render");
    
    return (
        <>
            <h1>Impure</h1>
            <p>{data}</p>
            <p>{impureData}</p>
        </>
    )
}

export default Impure