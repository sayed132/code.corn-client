import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaEye, FaPencilAlt } from 'react-icons/fa';

const Course = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    const { title, details, image_url, category_id, author, rating, total_view , tutorials} = courseDetails;
    return (
        <div style={{ height: '550px' }} className="card  bg-base-100 shadow-lg">
            <figure><img style={{ height: '150px' }} src={image_url} alt="thumbnail" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{details.slice(0,150)}</p>
                <div>{tutorials ? tutorials  : <>sorry no tutorials founds</>}</div>
                <div className="card-actions justify-between items-center">
                    <div className="card-actions items-center justify-start">
                        <img className="badge badge-outline w-100 btn-circle" src={author?.img} alt="" />
                        <div className="badge badge-outline"><FaPencilAlt></FaPencilAlt> &nbsp;{author?.name}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline"><FaEye className='text-muted'></FaEye>&nbsp;{total_view}</div>
                        <div className="badge badge-outline"> <Link to={`/category/${category_id}`}>
                            <button variant="primary">All course in this category</button>
                        </Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;

{/* <Link to={`/category/${category_id}`}>
                <Button variant="primary">All news in this category</Button>
            </Link> */}