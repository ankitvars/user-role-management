import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import AdminComponent from "./components/AdminComponent"
import UserManagement from "./components/UserManagement" // New component
import UserDashboard from "./components/UserDashboard"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import UserInvoices from "./components/UserInvoices"

const App: React.FC = () => {
  const role = useSelector((state: RootState) => state.user.role)
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        {/* Protected Routes for Authenticated Users */}
        {isLoggedIn ? (
          role === "admin" ? (
            <>
              <Route path="/dashboard" element={<AdminComponent />} />
              <Route path="/user-management" element={<UserManagement />} />
            </>
          ) : (
            <>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/invoices" element={<UserInvoices />} />
            </>
          )
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App
