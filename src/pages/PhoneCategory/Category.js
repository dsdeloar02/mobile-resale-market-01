import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const { categoryName, categoryImg , sold} = category;
    console.log(category)
    return (
        <div className='w-[23%] p-5 shadow-md rounded border'>
            <img className='w-full h-[200px] rounded' src={categoryImg} alt="" />
            <div className='mt-2 flex justify-between items-center'>
                <p className='text-xl'>{categoryName}</p>
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
