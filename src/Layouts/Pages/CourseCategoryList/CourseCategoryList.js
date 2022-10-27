import React, { useEffect, useState } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import CourseSummaryCard from '../Share/CourseSummaryCard/CourseSummaryCard';

const CourseCategoryList = () => {
    const [courseList, setCourserList] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-site.vercel.app/course')
            .then(res => res.json())
            .then(data => setCourserList(data))
    }, [])
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-8'>
            {/* {
                courseList.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            } */}
        </div>
    );
};

export default CourseCategoryList;