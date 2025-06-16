import './style.css'
import { createContext, useState } from "react"
import ShowTheme from "./ShowTheme"
import ChangeTheme from "./ChangeTheme"

export const Context = createContext(null) as any

const Usecontext = () => {

    const [theme, setTheme] = useState<boolean>(true)

    return (
        <>
            <Context.Provider value={{ theme, setTheme }}>
                <div className={`theme ${theme ? "light" : "dark"}`}>
                    <ShowTheme />
                    <br />
                    <ChangeTheme />
                </div>
            </Context.Provider>
        </>
    )
}

export default Usecontext