import React from "react"
import "./UserDashboard.css"
import Navbar from "./Navbar"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

// Register the components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend)

const UserDashboard: React.FC = () => {
  const userDetails: any = localStorage.getItem("userDetails")
  const userDetailsParsed = JSON.parse(userDetails)

  // Sample data for the line chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales ($)",
        data: [12000, 19000, 30000, 50000, 45000, 60000, 70000],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sales Overview",
      },
    },
  }

  // Dummy notifications
  const notifications = [
    { id: 1, message: "Your invoice ABC123 has been paid.", time: "2 minutes ago" },
    { id: 2, message: "New user registered: John Doe.", time: "10 minutes ago" },
    { id: 3, message: "Your profile was updated successfully.", time: "30 minutes ago" },
    { id: 4, message: "Scheduled maintenance will occur at 2 AM.", time: "1 hour ago" },
    { id: 5, message: "New comment on your post.", time: "2 hours ago" },
  ]

  return (
    <>
      <Navbar />
      <div className="user-dashboard">
        <h2>Hey, {userDetailsParsed && userDetailsParsed?.username}!</h2>

        <div className="dashboard-section">
          <div className="sales-chart">
            <h3>Sales</h3>
            {/* Render the Line Chart */}
            <Line data={data} options={options} />
          </div>

          <div className="notifications">
            <h3>Notifications</h3>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div key={notification.id} className="notification-item">
                  <span>{notification.message}</span>{" "}
                  <span className="notification-time">{notification.time}</span>
                </div>
              ))
            ) : (
              <div className="notification-item">No new notifications</div>
            )}
          </div>
        </div>

        <div className="recent-invoices">
          <h3>Recently Paid Invoices</h3>
          <div className="invoice-item">
            <span>ABC123</span>
            <span>18:41</span>
            <span>$15,232</span>
          </div>
          <div className="invoice-item">
            <span>GDG639</span>
            <span>16:32</span>
            <span>$23,595</span>
          </div>
          <div className="invoice-item">
            <span>PQR456</span>
            <span>15:31</span>
            <span>$40,123</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard
