import React, { useState, useEffect } from 'react';
import DashBtn from './DashBtn';
import './Resources.css';

export const Resources = () => {
  const [CourseArr, setCourseArr] = useState([]);
  const [search, setSearch] = useState('');
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

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <>
      <h3 id='h3' >All Resources</h3>

      <div className="filter">
        <select
          name="dept"
          id="dept"
          onChange={(e) => setDept(e.target.value)}
          value={dept}
        >
          <option value="All">All</option>
          {Array.from(new Set(CourseArr.map((course) => course.title))).map(
            (deptName, index) => (
              <option key={index} value={deptName}>
                {deptName}
              </option>
            )
          )}
        </select>

        <input
          type="text"
          name="search"
          className="search"
          id=""
          placeholder="Search courses"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div className="container2">
        {dept === 'All'
          ? [...CourseArr]
              .reverse()
              .filter((course) =>
                course.subject.toLowerCase().includes(search.toLowerCase())
              )
              .map((course, courseIndex) => (
                <div className='courseDiv' key={courseIndex}>
                  <h3>{course.subject}</h3>
                  {course.modules?.map((module, moduleIndex) => (
                    <div key={moduleIndex}>
                      {/* <h3>Module {moduleIndex + 1}</h3> */}
                      {module.topics?.map((topic, topicIndex) => (
                        <div className='topicDiv' key={topicIndex}>
                          <h3>{topic.title}</h3>
                          <h4>Videos:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'video')
                              .map((video, videoIndex) => (
                                <li key={videoIndex}>
                                  <a
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {video.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          <h4>Articles:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'Article')
                              .map((Article, ArticleIndex) => (
                                <li key={ArticleIndex}>
                                  <a
                                    href={Article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {Article.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          <h4>Books:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'Book')
                              .map((Book, BookIndex) => (
                                <li key={BookIndex}>
                                  <a
                                    href={Book.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {Book.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          <h4>Assignments:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'Assignment')
                              .map((Assignments, AssignmentsIndex) => (
                                <li key={AssignmentsIndex}>
                                  <a
                                    href={Assignments.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {Assignments.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          <h4>Quizes:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'Quiz')
                              .map((Quiz, QuizIndex) => (
                                <li key={QuizIndex}>
                                  <a
                                    href={Quiz.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {Quiz.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          {/* ... Render other resource types similarly */}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))
          : [...CourseArr]
              .reverse()
              .filter((course) => {
                return (
                  course.title === dept &&
                  course.subject.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((course, courseIndex) => (
                <div className='courseDiv' key={courseIndex}>
                  <h3>{course.subject}</h3>
                  {course.modules?.map((module, moduleIndex) => (
                    <div key={moduleIndex}>
                      <h3>Module {moduleIndex + 1}</h3>
                      {module.topics?.map((topic, topicIndex) => (
                        <div className='topicDiv'  key={topicIndex}>
                          <h3>{topic.title}</h3>
                          <h4>Videos:</h4>
                          <ul>
                            {topic.resources
                              ?.filter((resource) => resource.type === 'video')
                              .map((video, videoIndex) => (
                                <li key={videoIndex}>
                                  <a
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {video.url}
                                  </a>
                                </li>
                              ))}
                          </ul>
                          {/* ... Render other resource types similarly */}
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
