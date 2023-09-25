import React, { useState, useEffect } from 'react';
import DashBtn from './DashBtn';
import './Resources.css';

export const Resources = () => {
  const [CourseArr, setCourseArr] = useState([]);
  const [search, setSearch] = useState('');
  const [deptArr, setDeptArr] = useState([]);
  const [dept, setDept] = useState('All');

  const getAllCourses = async () => {
    try {
      const res = await fetch('/allcourses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const allCourses = await res.json();

      setCourseArr(allCourses);
    } catch (err) {
      console.log(err);
    }
  };

  const getTopicArr = () => {
    const Arr = CourseArr.map((course) => course.title);
    const deptSet = new Set(Arr);

    // Convert the Set back to an array (if needed)
    const distinctDepts = Array.from(deptSet);
    setDeptArr(distinctDepts);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  useEffect(() => {
    getTopicArr();
  }, [CourseArr]);

  return (
    <>
      <h3>All Resources</h3>

      <div className="filter">
        <select name="dept" id="dept" onChange={(e) => setDept(e.target.value)}>
          <option value="All">All</option>
          {deptArr.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="search"
          className="search"
          id=""
          placeholder="Search courses"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="container2">
        {dept === 'All'
          ? [...CourseArr].reverse().filter((course)=>
          {
            return(course.subject.toLowerCase().includes(search.toLowerCase()))
          }).map((course, courseIndex) => (
              <div key={courseIndex}>
                <h3>{course.subject}</h3>
                {course.modules?.map((module, moduleIndex) => (
                  <div key={moduleIndex}>
                    <h3>Module {moduleIndex + 1}</h3>
                    {module.topics?.map((topic, topicIndex) => (
                      <div key={topicIndex}>
                        <h3>{topic.title}</h3>
                        <h4>Videos:</h4>
                        <ul>
                          {topic.resources
                            ?.filter((resource) => resource.type === 'video')
                            .map((video, videoIndex) => (
                              <li key={videoIndex}>
                                <a href={video.url} target="_blank" rel="noopener noreferrer">
                                  {video.url}
                                </a>
                              </li>
                            ))}
                        </ul>
                        <h4>Articles:</h4>
                        <ul>
                          {topic.resources
                            ?.filter((resource) => resource.type === 'Article')
                            .map((article, articleIndex) => (
                              <li key={articleIndex}>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
                                  {article.url}
                                </a>
                              </li>
                            ))}
                        </ul>
                        <h4>Quizzes:</h4>
                        <ul>
                          {topic.resources
                            ?.filter((resource) => resource.type === 'Quiz')
                            .map((quiz, quizIndex) => (
                              <li key={quizIndex}>
                                <a href={quiz.url} target="_blank" rel="noopener noreferrer">
                                  {quiz.url}
                                </a>
                              </li>
                            ))}
                        </ul>
                        <h4>Assignments:</h4>
                        <ul>
                          {topic.resources
                            ?.filter((resource) => resource.type === 'Assignment')
                            .map((assignment, assignmentIndex) => (
                              <li key={assignmentIndex}>
                                <a href={assignment.url} target="_blank" rel="noopener noreferrer">
                                  {assignment.url}
                                </a>
                              </li>
                            ))}
                        </ul>
                        <h4>Books:</h4>
                        <ul>
                          {topic.resources
                            ?.filter((resource) => resource.type === 'Book')
                            .map((book, bookIndex) => (
                              <li key={bookIndex}>
                                <a href={book.url} target="_blank" rel="noopener noreferrer">
                                  {book.url}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))
          : [...CourseArr]
              .reverse()
              .filter((course) =>{
                return (course.title === dept && course.subject.toLowerCase().includes(search.toLowerCase()))
              })
              .map((course, courseIndex) => (
                <div key={courseIndex}>
                  <h3>{course.subject}</h3>
                  {course.modules?.map((module, moduleIndex) => (
                    <div key={moduleIndex}>
                      <h3>Module {moduleIndex + 1}</h3>
                      {module.topics?.map((topic, topicIndex) => (
                        <div key={topicIndex}>
                          <h3>{topic.title}</h3>
                          <h4>Videos:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'video')
                              .map((video, videoIndex) => (
                                <li key={videoIndex}>
                                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                                    {video.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          <h4>Articles:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'Article')
                              .map((article, articleIndex) => (
                                <li key={articleIndex}>
                                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                                    {article.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          <h4>Quizzes:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'Quiz')
                              .map((quiz, quizIndex) => (
                                <li key={quizIndex}>
                                  <a href={quiz.url} target="_blank" rel="noopener noreferrer">
                                    {quiz.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          <h4>Assignments:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'Assignment')
                              .map((assignment, assignmentIndex) => (
                                <li key={assignmentIndex}>
                                  <a href={assignment.url} target="_blank" rel="noopener noreferrer">
                                    {assignment.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          <h4>Books:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'Book')
                              .map((book, bookIndex) => (
                                <li key={bookIndex}>
                                  <a href={book.url} target="_blank" rel="noopener noreferrer">
                                    {book.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
      </div>
    </>
  );
};
