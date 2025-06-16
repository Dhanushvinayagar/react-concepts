import { useEffect, useState, useTransition } from "react"

const randomNumber = () => {
    return Math.floor(Math.random() * 100000)
}

const Usetransition = () => {

    const [data, setData] = useState([]) as any
    const [isPending, startTransition] = useTransition()
    // wrap operations blocking ui in startTransition

    useEffect(() => {
        startTransition(() => {
            setData(Array.from({ length: randomNumber() }, (_, i) => i + 1))
        })
    }, [])

    if (isPending) return <p>Loading</p>
    return (
        <>
            {
                data.map((item: any, index: number) => {
                    return <p key={index}>{item}</p>
                })
            }
        </>
    )
}

export default Usetransition