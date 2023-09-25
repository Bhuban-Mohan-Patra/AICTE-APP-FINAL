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
      <h3>All Resources</h3>

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
