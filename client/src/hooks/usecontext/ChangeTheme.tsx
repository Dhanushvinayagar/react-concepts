import { useContext } from "react"
import { Context } from "./Usecontext"

const ChangeTheme = () => {

    const { setTheme }:any = useContext(Context)

    return (
        <div>
            <button onClick={() => setTheme((prev:boolean)=>!prev)}>Change Theme</button>
        </div>
    )
}

export default ChangeTheme