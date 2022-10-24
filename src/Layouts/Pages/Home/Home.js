import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Share/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCourse = useLoaderData()
    console.log(allCourse);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-8'>
            {
                allCourse.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Home;