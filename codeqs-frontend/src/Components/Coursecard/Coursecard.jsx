import PropTypes from 'prop-types';

const CourseCard = ({ course }) => {
  return (
    <div style={styles.card}>
      <img src={course.coverPic} alt={course.title} style={styles.coverPic} />
      <div style={styles.content}>
        <h2 style={styles.title}>{course.title}</h2>
        <p style={styles.description}>{course.description}</p>
        <p><strong>Author:</strong> {course.author}</p>
        <p><strong>Rating:</strong> {course.rating} star / 5</p>
        <p><strong>Total Hours:</strong> {course.totalHours}</p>
        <p style={styles.price}><strong>Price:</strong> ${course.price}</p>
        <a href={course.enrollLink} style={styles.enrollButton}>Enroll Now</a>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',  // Reduced padding
    width: '250px',   // Reduced width
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  coverPic: {
    width: '100%',
    height: '120px',  // Reduced height
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  },
  content: {
    padding: '12px',  // Reduced padding for content
  },
  title: {
    fontSize: '16px', // Adjusted font size for the title
    marginBottom: '8px',
  },
  description: {
    color: '#555',
    fontSize: '12px', // Reduced font size for the description
    marginBottom: '10px',
  },
  price: {
    fontSize: '16px', // Adjusted font size for the price
    color: '#27ae60',
    margin: '8px 0',
  },
  enrollButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '8px 12px', // Reduced padding for the button
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    display: 'inline-block',
    width: '100%',
  },
};

export default CourseCard;
