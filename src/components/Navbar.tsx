import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { resetUser } from "../redux/userSlice" // Adjust import based on your user slice

const Navbar: React.FC = () => {
  const role = useSelector((state: RootState) => state.user.role)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear()

    // Dispatch reset action to Redux store
    dispatch(resetUser()) // Ensure this action resets the user state

    // Redirect to login or home page
    navigate("/login") // Change the path as necessary
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Product</h1>
      </div>
      <div className="navbar-right">
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/invoices" className="nav-link">
          Invoices
        </NavLink>
        {role === "admin" && (
          <NavLink to="/user-management" className="nav-link">
            User Management
          </NavLink>
        )}
        <NavLink to="/user-management" onClick={handleLogout} className="nav-link">
          Logout
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
