import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFilePdf, FaEye, FaPencilAlt } from 'react-icons/fa';
import Pdf from "react-to-pdf";

/* createRef for pdf downloader */
const ref = React.createRef();
const Checkout = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    const { title, details, image_url, category_id, author, rating, total_view, tutorials } = courseDetails;
    return (
        <div style={{ height: '550px' }} className="card mx-4 lg:mx-28  bg-base-100 shadow-lg">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) =>
                    <button onClick={toPdf} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><FaFilePdf className=' lg:text-4xl'></FaFilePdf> &nbsp;&nbsp; Download Pdf</button>
                 }
            </Pdf>
            <div ref={ref} >
                <figure><img style={{ height: '250px' }} src={image_url} alt="thumbnail" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{details}</p>
                    <div>{tutorials ? tutorials : <>sorry no tutorials founds</>}</div>
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
        </div>
    );
};

export default Checkout;

{/* <Link to={`/category/${category_id}`}>
                <Button variant="primary">All news in this category</Button>
            </Link> */}