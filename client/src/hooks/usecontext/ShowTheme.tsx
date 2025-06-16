import { useContext } from "react"
import { Context } from "./Usecontext"

const ShowTheme = () => {

    const { theme } : any = useContext(Context)

    return (
        <div>
            Current Theme : {theme ? "Light" : "Dark"}
        </div>
    )
}

export default ShowTheme