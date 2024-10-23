import React from 'react'
import {useNavigate} from 'react-router-dom'; 

import CourseCard from '../Coursecard/Coursecard';
// Dummy data for courses
const courses = [
    {
      coverPic: 'https://via.placeholder.com/300x150',
      title: 'React Basics',
      description: 'Learn the basics of React.js',
      author: 'John Doe',
      rating: '4',
      totalHours: '12 hours',
      price: 49.99,
      enrollLink: '#',  // Replace with actual link
    },
    {
      coverPic: 'https://via.placeholder.com/300x150',
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts.',
      author: 'Jane Smith',
      rating: '4.5',
      totalHours: '10 hours',
      price: 59.99,
      enrollLink: '#',  // Replace with actual link
    },
    {
      coverPic: 'https://via.placeholder.com/300x150',
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts.',
      author: 'Jane Smith',
      rating: '4.5',
      totalHours: '10 hours',
      price: 59.99,
      enrollLink: '#',  // Replace with actual link
    }, {
      coverPic: 'https://via.placeholder.com/300x150',
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts.',
      author: 'Jane Smith',
      rating: '4.5',
      totalHours: '10 hours',
      price: 59.99,
      enrollLink: '#',  // Replace with actual link
    }, {
      coverPic: 'https://via.placeholder.com/300x150',
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts.',
      author: 'Jane Smith',
      rating: '4.5',
      totalHours: '10 hours',
      price: 59.99,
      enrollLink: '#',  // Replace with actual link
    }, {
      coverPic: 'https://via.placeholder.com/300x150',
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts.',
      author: 'Jane Smith',
      rating: '4.5',
      totalHours: '10 hours',
      price: 59.99,
      enrollLink: '#',  // Replace with actual link
    }, {
      coverPic: 'https://via.placeholder.com/300x150',
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts.',
      author: 'Jane Smith',
      rating: '4.5',
      totalHours: '10 hours',
      price: 59.99,
      enrollLink: '#',  // Replace with actual link
    }, {
      coverPic: 'https://via.placeholder.com/300x150',
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts.',
      author: 'Jane Smith',
      rating: '4.5',
      totalHours: '10 hours',
      price: 59.99,
      enrollLink: '#',  // Replace with actual link
    },{
      coverPic: 'https://via.placeholder.com/300x150',
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts.',
      author: 'Jane Smith',
      rating: '4.5',
      totalHours: '10 hours',
      price: 59.99,
      enrollLink: '#',  // Replace with actual link
    },{
      coverPic: 'https://via.placeholder.com/300x150',
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts.',
      author: 'Jane Smith',
      rating: '4.5',
      totalHours: '10 hours',
      price: 59.99,
      enrollLink: '#',  // Replace with actual link
    },
  ];
  
const Fcourse = () => {
    const navigate = useNavigate(); 

  const handlebtn = () => {
    navigate('/courses'); 
  }
  return (
    <div>
        <div>
            <div style={{display:'flex'}}>
            <h1>Featured Courses</h1>
            <button onClick={ handlebtn} style={{marginLeft:'170vh',width:'80px'}}>All Courses</button>
            </div>
            <p>Explore our featured courses designed to help you gain in-demand skills and advance your career. Learn at <br /> your own pace with expert instructors, practical projects, and a supportive learning community.</p>
        </div>
         <div style={styles.courseContainer}>
           {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
           ))}
         </div>  
  </div>
  )

}
// Style to arrange the courses
const styles = {
  courseContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    flexWrap: 'wrap',
  },
};
export default Fcourse