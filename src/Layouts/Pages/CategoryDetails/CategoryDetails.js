import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaEye, FaPencilAlt } from 'react-icons/fa';

const CategoryDetails = ({ category }) => {
    const { author, details, price, others_info, rating, thumbnail_url, name, total_view } = category;

    return (
        <Link to={`/category/${category.id}`}>
            <div style={{ height: '550px' }} className="card w-100 bg-base-100 shadow-xl">
                <figure><img src={thumbnail_url} alt="thumbnail" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{details}</p>
                    <div className="card-actions items-center justify-between">

                        <div className=" justify-start items-center">
                            <img className="badge badge-outline w-100 btn-circle mr-2" src={author?.img} alt="" />
                            <div className="badge badge-outline"><FaPencilAlt></FaPencilAlt> &nbsp;{author?.name}</div>
                        </div>
                        <div className=" justify-end font-bold">
                            <div className="badge badge-outline mr-2">Price:{price}</div>
                            <div className="badge badge-outline hover:bg-yellow-300 ">Get Premium</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryDetails;