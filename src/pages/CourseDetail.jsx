import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/courses.js';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === id);

  if (!course) return <div className="container mt-5">Course not found</div>;

  return (
    <div className="container py-5">
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="mb-2">{course.title}</h2>
        <p className="text-muted">{course.description}</p>
      </div>

      <h4 className="mt-5 mb-4 text-primary">Lessons</h4>

      {course.lessons.map((lesson, index) => (
        <div key={index} className="card mb-4 border-0 shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-dark">{lesson.title}</h5>
            <p className="card-text">{lesson.description}</p>

            {lesson.resources?.length > 0 && (
              <>
                <h6 className="mt-3">Resources</h6>
                <ul className="list-unstyled">
                  {lesson.resources.map((link, i) => (
                    <li key={i}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        📘 {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {lesson.youtubeLink && (
              <div className="mt-3">
                <h6>Video</h6>
                <a
                  href={lesson.youtubeLink}
                  className="btn btn-sm btn-outline-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Watch on YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetail;
