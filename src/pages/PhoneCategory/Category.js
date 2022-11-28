import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const { categoryName, categoryImg , sold} = category;
    console.log(category)
    return (
        <div className='w-[48%] md:w-[33%] lg:w-[23%] mb-2 md:mb-2 flex flex-col justify-between lg:mb-0 p-5 shadow-md rounded border'>
            <img className='w-full h-full rounded-lg p-7 border' src={categoryImg} alt="" />
            <div className='mt-2 flex justify-between items-center'>
                <p className='text-sm md:text-xl'>{categoryName}</p>
                {
                    categoryName && !sold &&  <Link to={`/products/${categoryName}`} >
                         <FaArrowCircleRight className='h-6 w-6'></FaArrowCircleRight>
                    </Link>
                }
                {
                    categoryName && sold &&  <Link to={`/products/${categoryName}`} >
                         {/* <FaArrowCircleRight className='h-6 w-6'></FaArrowCircleRight> */}
                    </Link>
                }
            </div>
        </div>
    );
}

export default Category;
