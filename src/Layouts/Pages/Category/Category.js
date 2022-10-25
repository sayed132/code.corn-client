import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Share/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const categoryCourse = useLoaderData()
    console.log(categoryCourse);
    return (
        <div>
            <h2>this is category has news: {categoryCourse.length}</h2>
            {
                categoryCourse.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );

};

export default Category;