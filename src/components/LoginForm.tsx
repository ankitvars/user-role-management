import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import AuthPage from "./AuthPage"
import { updateUserRole } from "../redux/userSlice"

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails") || "null")

    if (!userDetails) {
      toast.warning("No account found. Please sign up first.")
      navigate("/signup") // Redirect to Signup page
      return
    }

    // Validate email and password
    if (userDetails.email === email && userDetails.password === password) {
      const { username, role } = userDetails
      localStorage.setItem("isLoggedIn", "true")
      // Set data in Redux store
      dispatch(updateUserRole({ username, role }))

      // Save login info to local storage
      localStorage.setItem("userRole", role)
    } else {
      toast.error("Invalid email or password.")
    }
  }

  return (
    <AuthPage title="Welcome Again">
      <div className="login-form">
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
        <button onClick={handleLogin}>Log In</button>
        <div className="or-divider">or</div>
        <div className="social-login">
          {/* Add icons for Google and other login methods here */}
        </div>
        <p className="register-link">
          New User? <a href="/signup">Register Here.</a>
        </p>
      </div>
    </AuthPage>
  )
}

export default LoginForm
