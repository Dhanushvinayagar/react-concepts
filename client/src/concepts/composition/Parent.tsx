import './style.css'
import { useState } from "react"
type Theme = 'light' | 'dark'

const Parent = ({ children }: any) => {
    const [theme, setTheme] = useState<Theme>('light')

    return (
        <div
            className="parent"
            style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
            {children}
        </div>
    )
}

export default Parent