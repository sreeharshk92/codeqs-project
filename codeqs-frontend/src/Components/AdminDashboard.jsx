import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard!</p>
            {/* Add admin-specific features here */}
        </div>
    );
};

export default AdminDashboard;
