import React from 'react'
import { useState, useEffect } from 'react';
import DashBtn from './DashBtn'
import './Resources.css'
export const Resources = () => {

  const [CourseArr, setCourseArr] = useState([]);
  const getAllCourses = async () => {
    const res = await fetch('/allcourses', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const AllCourses = await res.json()

    setCourseArr(AllCourses);
    console.log(CourseArr)
    // console.log(`${AllCourses} from resources`);

  }

  useEffect(() => {
    getAllCourses();
  }, [])



  return (
    <>
      <DashBtn />
      <div className='container2'>
        <h3>All Resources</h3>
        {CourseArr.map((course, courseIndex) => (
          <div key={courseIndex}>
            {/* <h3>{course.subject}</h3> */}
            {course.modules?.map((module, moduleIndex) => (
              <div key={moduleIndex}>
                {/* <h3>Module {moduleIndex + 1}</h3> */}
                {module.topics?.map((topic, topicIndex) => (
                  <div key={topicIndex}>
                    <h3>{topic.title}</h3>
                    <h4>Videos:</h4>
                    <ul>
                      {topic.resources
                        ?.filter((resource) => resource.type === 'video')
                        .map((video, videoIndex) => (
                          <li key={videoIndex}>
                            <a href={video.url} target='_blank'>
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
                            <a href={article.url} target='_blank'>
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
                            <a href={quiz.url} target='_blank'>
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
                            <a href={assignment.url} target='_blank'>
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
                            <a href={book.url} target='_blank'>
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
    
  


}
