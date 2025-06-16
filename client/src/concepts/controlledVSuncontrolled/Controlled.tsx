import { useState } from "react"

//Controlled component - data state is managed by react

const Controlled = () => {
    const [text, setText] = useState('')

    return (
        <>
            <h1>Controlled</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>{text}</p>
        </>
    )
}

export default Controlled