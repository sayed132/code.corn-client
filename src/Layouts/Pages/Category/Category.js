import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Share/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const categoryCourse = useLoaderData()
    console.log(categoryCourse);
    return (
        <div>
            <h2>this category has {categoryCourse.length} course</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-8'>
            {
                categoryCourse.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
        </div>
    );

};

export default Category;