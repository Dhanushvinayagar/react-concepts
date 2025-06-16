import { useState } from "react"
import Otp from "./Otp"

const Login = () => {
    const [showOtp, setShowOtp] = useState(false)

    return (
        <div>
            <h1>Login</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Username</p>
                <input type="text" />
                <p>Password</p>
                <input type="password" />
            </div>
            <button onClick={() => setShowOtp(true)}>Login</button>
            {
                showOtp && <Otp />
            }
        </div>
    )
}

export default Login