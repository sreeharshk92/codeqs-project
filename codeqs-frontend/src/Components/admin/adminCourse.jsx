import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './course.css'; // Ensure this CSS file exists

const Course = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/categories');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await fetch('http://localhost:8000/api/courses', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: formData,
            });

            const data = await response.json();
            if (data.error) {
                console.error('Error adding course:', data.error);
            } else {
                console.log('Course added successfully:', data);
                navigate('/admin-dashboard'); // Adjust as necessary
            }
        } catch (error) {
            console.error('Error saving course:', error);
        }
    };

    return (
        <section className="course-section">
            <div className="container">
                <h2>Add New Course</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="course-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter course name" required />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" name="price" placeholder="Enter price" required />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category_id" className="form-control" required>
                            <option value="">Select a category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <div className="radio-group">
                            <label><input type="radio" value="1" name="status" required /> Active</label>
                            <label><input type="radio" value="0" name="status" required /> Inactive</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Favourate</label>
                        <div className="radio-group">
                            <label><input type="radio" value="1" name="is_favourate" required /> Yes</label>
                            <label><input type="radio" value="0" name="is_favourate" required /> No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="file" className="form-control-file" name="image" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Course;
