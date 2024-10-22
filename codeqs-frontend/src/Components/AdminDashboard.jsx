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
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className="admin-dashboard">
            {/* Left sidebar */}
            <LeftMenu />

            {/* Main Content */}
            <div className="dashboard-content">
                {/* Top center content */}
                <div className="dashboard-header">
                    <h1>Admin Dashboard</h1>
                    <p>Welcome to the admin dashboard!</p>
                </div>

                {/* Master Content */}
                <div className="master-container">
                    <Master />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
