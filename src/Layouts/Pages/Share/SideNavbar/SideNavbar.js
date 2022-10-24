import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-site.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='border mx-4'>
            <div className="btn-group grid grid-cols-1 gap-4 w-100">
                <button className="btn btn-outline"> <FaGoogle className='text-xl'></FaGoogle> &nbsp; LogIn With Google</button>
                <button className="btn btn-outline"><FaGithub className='text-xl'></FaGithub> &nbsp; LogIn With Github</button>
            </div>
            <div>
                <h4>All Categories: {categories.length}</h4>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNavbar;