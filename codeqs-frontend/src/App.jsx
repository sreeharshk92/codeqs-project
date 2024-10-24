import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // Check this path
import Login from './pages/Login/Login'; // Check this path
import AdminDashboard from './Components/AdminDashboard'; // Check this path
import PrivateRoute from './Components/PrivateRoute'; // Check this path
import Courses from './pages/Courses/Courses';
import CourseList from './Components/admin/CourseList';
import Course from './Components/admin/adminCourse';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute element={Home} />} />
                <Route path="/Courses" element={<Courses/>} />

                <Route path="/admin-dashboard" element={<PrivateRoute element={AdminDashboard} />} />
                <Route path="/admin-courses" element={<PrivateRoute element={Course} />} />
                <Route path="/courselist" element={<PrivateRoute element={CourseList} />} />
            </Routes>
        </Router>
    );
};

export default App;