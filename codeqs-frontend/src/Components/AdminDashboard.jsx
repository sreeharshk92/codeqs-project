import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Master from './admin/layout/Master';
import LeftMenu from './admin/layout/Leftmenu';
import './admin/adminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if (userRole !== 'admin') {
            navigate('/login'); // Redirect to login if not admin
        }
    }, [navigate]);

    return (
        <div className="admin-dashboard">
            <LeftMenu />
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h1>Admin Dashboard</h1>
                    <p>Welcome to the admin dashboard!</p>
                </div>
                <div className="master-container">
                    <Master />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
