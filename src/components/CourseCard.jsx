import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow">
      <img src={course.image} className="card-img-top" alt={course.title} />
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <Link to={`/course/${course.id}`} className="btn btn-outline-primary btn-sm">View Course</Link>
      </div>
    </div>
  </div>
);

export default CourseCard;