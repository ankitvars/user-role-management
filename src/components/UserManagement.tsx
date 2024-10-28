import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import "./UserManagement.css"
import { toast } from "react-toastify"

interface User {
  id: number
  username: string
  email: string
  role: string
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [newUser, setNewUser] = useState<{ username: string; email: string; role: string }>({
    username: "",
    email: "",
    role: "",
  })

  // Fetch users from localStorage on component mount
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
    setUsers(storedUsers)
  }, [])

  // Function to add user
  const handleAddUser = () => {
    if (!newUser.username || !newUser.email || !newUser.role) {
      toast.error("Please fill in all fields.")
      return
    }

    // Check for duplicate email
    const userExists = users.some((user) => user.email === newUser.email)
    if (userExists) {
      toast.error("User with this email already exists.")
      return
    }

    const id = users.length ? users[users.length - 1].id + 1 : 1
    const userToAdd: User = { id, ...newUser }

    const updatedUsers = [...users, userToAdd]
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))

    setNewUser({ username: "", email: "", role: "" })
    toast.success("User added successfully.")
  }

  // Function to delete user
  const handleDeleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id)
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
    toast.success("User deleted successfully.")
  }

  // Optional: Function to edit user (not implemented)
  // const handleEditUser = (id: number, updatedUser: Partial<User>) => {
  //   const updatedUsers = users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
  //   setUsers(updatedUsers)
  //   localStorage.setItem("users", JSON.stringify(updatedUsers))
  //   toast.success("User updated successfully.")
  // }

  return (
    <div className="user-management">
      <Navbar />

      {/* User Management Content */}
      <div className="user-management-content">
        <h2>User Management</h2>

        {/* Add User Form */}
        <div className="add-user-form">
          <h3>Add New User</h3>
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role (e.g., admin, user)"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>

        {/* Users Table */}
        <div className="users-table">
          <h3>Registered Users</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      {/* Optionally, add Edit functionality */}
                      <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center" }}>
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserManagement
