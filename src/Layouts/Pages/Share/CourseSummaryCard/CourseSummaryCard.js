import React from 'react';

const CourseSummaryCard = ({ course }) => {
    console.log(course);
    const { author, details, image_url, others_info, rating, thumbnail_url, title, total_view, _id } = course;
    return (

        <div className="card w-100 bg-base-100 shadow-xl">
            <figure><img src={thumbnail_url} alt="thumbnail" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{total_view}</div>
                    <div className="badge badge-outline">{author?.name}</div>
                </div>
            </div>
        </div>
    );
};

export default CourseSummaryCard;