import React from "react"
import "./UserInvoices.css"
import Navbar from "./Navbar"

const UserInvoices: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="user-invoices">
        <div className="user-invoices-heading">
          <h2>Invoices as of {new Date().toLocaleDateString()},</h2>
          <input disabled type="number" placeholder="0" />
        </div>

        <div className="invoice-stats">
          <div className="invoice-card">
            <h3>Paid Invoices</h3>
            <p>15</p>
          </div>
          <div className="invoice-card">
            <h3>Due Invoices</h3>
            <p>13</p>
          </div>
          <div className="invoice-card">
            <h3>Total Invoices</h3>
            <p>28</p>
          </div>
        </div>
        <button className="add-invoice-button">+ New Invoice</button>
        <div className="invoice-list">
          <h3>Invoices</h3>
          <ul>
            <li>ABC12345 - $06,323</li>
            <li>GDU63586 - $30,123</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default UserInvoices
