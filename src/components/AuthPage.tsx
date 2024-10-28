import React from "react"
import "./AuthPage.css"

interface AuthPageProps {
  title: string
  children: React.ReactNode
}

const AuthPage: React.FC<AuthPageProps> = ({ title, children }) => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="company-logo">
          {/* Replace with your actual logo or image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAK0S3ORz3TzAcpO1S8Ibt2aFhS32u69VfQ&s"
            alt="Company Logo"
          />
        </div>
      </div>
      <div className="auth-right">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default AuthPage
