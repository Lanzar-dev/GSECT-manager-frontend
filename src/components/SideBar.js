import React from 'react'
import "../styles/components/sidebar.scss"

const SideBar = () => {
    return (
        <div className="side-bar">
            
            <div className="gsect-sidebar">
                <h2>GSECT</h2>
            </div>

            <div className="sidebar-list">
                    <li className="dashboard"><a href="http://localhost:3000/dashboard">Dashboard </a></li>
                    <li className="activesubscription"><a href="http://localhost:3000/activesubscription">Active Subscriptions </a></li>
                    <li className="history-analytics"><a href="http://localhost:3000/history-analytics">History & Analytics </a></li>
                    <li className="settings"><a href="http://localhost:3000/settings">Settings </a></li>
                    <li className="logout"><a href="http://localhost:3000/logout">Log out </a></li>
            </div>

        </div>
        
        )
    }

   


export default SideBar