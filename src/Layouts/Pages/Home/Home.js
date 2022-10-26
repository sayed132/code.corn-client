import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import CourseSummaryCard from '../Share/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCourse = useLoaderData()
    console.log(allCourse);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-8'>
            
            {
                    allCourse.map(category => <CategoryDetails
                        key={category.id}
                        category={category}
                    ></CategoryDetails>)
                }
        </div>
    );
};

export default Home;