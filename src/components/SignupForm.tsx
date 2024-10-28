import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import AuthPage from "./AuthPage"
import { updateUserRole } from "../redux/userSlice"

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("") // Role input field
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = () => {
    // Save user details including role in local storage
    const userDetails = { username, email, password, role }
    localStorage.setItem("userDetails", JSON.stringify(userDetails))

    // Update Redux store with role
    dispatch(updateUserRole({ username, role }))

    toast.success("Signup successful! You can now log in.")
    navigate("/login") // Redirect to login page
  }

  return (
    <AuthPage title="Create an Account">
      <div className="signup-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role (e.g., admin, user)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </AuthPage>
  )
}

export default SignupForm
