import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Carousel from '../Carousel/Carousel';

const SideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-site.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className=' bg-gray-200 p-6 rounded-md shadow-2xl'>
            {/* <div className="hidden btn-group lg:grid grid-cols-1 gap-4 w-100 ">
                <button className="btn btn-outline"> <FaGoogle className='text-xl'></FaGoogle> &nbsp; LogIn With Google</button>
                <button className="btn btn-outline"><FaGithub className='text-xl'></FaGithub> &nbsp; LogIn With Github</button>
            </div> */}
            <div>
                <h2 className='bg-cyan-500 hover:bg-cyan-600 my-4 p-2 font-bold rounded-md text-amber-100'>Total {categories.length} course get the premium access here</h2>
                {
                    categories.map(category => <Link className='text-white' to={`/category/${category.id}`} key={category.id}>
                        <p className='bg-indigo-500 hover:bg-indigo-600 my-4 p-4 rounded-md'>
                            {category.name}
                         </p>
                    </Link>)
                }

            </div>
            <div style={{ height: '210px' }} className='hidden lg:block'>
                <Carousel></Carousel>
            </div>
        </div>
    );
};

export default SideNavbar;