import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-site.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='border pl-24'>
            <h4>All Categories: {categories.length}</h4>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default SideNavbar;