import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AdminDashboard from './Components/AdminDashboard';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin-dashboard' element={<AdminDashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
