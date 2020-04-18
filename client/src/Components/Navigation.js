import React from "react"
import { useInput } from "./useInput"

const Navigation = () => {
    const [username, setUsername, handleUsername] = useInput("");
    const [password, setPassword, handlePassword] = useInput("");
    const [email, setEmail, handleEmail] = useInput("");
  
    const resetValues = e => {
      e.preventDefault();
      setUsername("");
      setPassword("");
      setEmail("");
    };

    return (
        <nav className="navigation">
            <h1>Ladies Who Ball Out!</h1>
            <div className="form">
                <form onSubmit={resetValues}>
                    <input
                        className="username-text"
                        id="username"
                        name="username"
                        onChange={e => handleUsername(e.target.value)}
                        placeholder="Username"
                        type="text"
                        value={username}
                    />
                    <input
                        className="password-test"
                        id="password"
                        name="password"
                        onChange={e => handlePassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                        value={password}
                    />
                    <input
                        className="email-text"
                        id="email"
                        name="email"
                        onChange={e => handleEmail(e.target.value)}
                        placeholder="Email"
                        type="text"
                        value={email}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </nav>
    )
}

export default Navigation