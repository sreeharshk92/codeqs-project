import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // Check this path
import Login from './pages/Login/Login'; // Check this path
import AdminDashboard from './Components/AdminDashboard'; // Check this path
import PrivateRoute from './Components/PrivateRoute'; // Check this path
import Courses from './pages/Courses/Courses';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute element={Home} />} />
                <Route path="/Courses" element={<Courses/>} />

                <Route path="/admin-dashboard" element={<PrivateRoute element={AdminDashboard} />} />
                <Route path="/courses" element={<PrivateRoute element={Courses} />} />
                
            </Routes>
        </Router>
    );
};

export default App;
