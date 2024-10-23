import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Master from './admin/layout/Master';
import LeftMenu from './admin/layout/Leftmenu';
import Course from './admin/Course';
import './admin/adminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    

  

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if (userRole !== 'admin') {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className="admin-dashboard-container">
            <Master /> {/* Top left corner */}
            <div className="dashboard-body">
                <LeftMenu /> {/* Sidebar on the left */}
                <div className="dashboard-content">
                    <div className="dashboard-header">
                        <h1>Admin Dashboard</h1>
                        <p>Welcome to the admin dashboard!</p>
                    </div>
                    <div className="course-container">
                        <Course /> {/* Add new course in center */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
