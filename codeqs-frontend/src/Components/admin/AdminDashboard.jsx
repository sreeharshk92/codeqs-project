import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faSearch, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import LeftMenu from './layout/Leftmenu';


const AdminDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if (userRole !== 'admin') {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div>
            <LeftMenu /> {/* Render the Left Menu here */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="mb-2 row">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard v3</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <h1>Admin Dashboard</h1>
                    <p>Welcome to the admin dashboard!</p>
                    {/* Add admin-specific features here */}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
