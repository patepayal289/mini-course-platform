import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../data/courses.js';

const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Welcome to Mini Course Platform</h1>
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card h-100">
              {/* <img src={course.image} className="card-img-top" alt={course.title} /> */}
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <Link to={`/course/${course.id}`} className="btn btn-primary">View Course</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
