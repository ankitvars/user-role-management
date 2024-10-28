import React from "react"
import { Pie, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js"
import "./AdminDashboard.css"
import Navbar from "./Navbar"

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)

const AdminComponent: React.FC = () => {
  // Pie chart data for User Distribution
  const pieData = {
    labels: ["Admin", "User", "Guest"],
    datasets: [
      {
        label: "User Distribution",
        data: [30, 50, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  }

  // Line chart data for Sales Report
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  }

  return (
    <div className="admin-dashboard">
      {/* Navigation Bar */}
      <Navbar />

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>Dashboard</h2>
        </div>

        <div className="statistics-section">
          <div className="stat-card">
            <h3>User Distribution</h3>
            <Pie data={pieData} />
          </div>
          <div className="stat-card">
            <h3>Today's Sales</h3>
            <p className="stat-value">$15,000</p>
          </div>
          <div className="stat-card">
            <h3>Total Customers</h3>
            <p className="stat-value">12,000</p>
          </div>
        </div>

        <div className="sales-report-section">
          <div className="sales-report-header">
            <h3>Sales Report</h3>
            <button className="pdf-button">PDF</button>
          </div>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  )
}

export default AdminComponent
