import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar , FaEye, FaPencilAlt} from 'react-icons/fa';

const CategoryDetails = ({category}) => {
    const { author, details, image_url, others_info, rating, thumbnail_url, name, total_view } = category;
    
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
                    <div className="card-actions justify-between items-center">
                        
                        <div className="card-actions items-center justify-start">
                        <img className="badge badge-outline w-100 btn-circle"  src={author?.img} alt="" />
                        <div className="badge badge-outline"><FaPencilAlt></FaPencilAlt> &nbsp;{author?.name}</div>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline"><FaEye className='text-muted'></FaEye>&nbsp;{total_view}</div>
                            <div className="badge badge-outline"><FaStar className='text-warning'></FaStar>&nbsp;{rating?.number}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryDetails;