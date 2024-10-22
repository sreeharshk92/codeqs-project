import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AdminDashboard from './Components/admin/AdminDashboard';
import Master from './Components/admin/layout/Master';
import LeftMenu from './Components/admin/layout/Leftmenu';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin-dashboard' element={<AdminDashboard />} />
                    <Route path='/master' element={<Master />} />
                    <Route path='/leftmenu' element={<LeftMenu />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
