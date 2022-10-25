import React, { useEffect, useState } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const CourseCategoryList = () => {
    const [CategoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-site.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, [])
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-8'>
            {
                    CategoryList.map(category => <CategoryDetails
                        key={category.id}
                        category={category}
                    ></CategoryDetails>)
                }
        </div>
    );
};

export default CourseCategoryList;